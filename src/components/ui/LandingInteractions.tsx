"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { initializeLandingPage } from "@/lib/landing-interactions";
import { registrationSchema } from "@/lib/registration-schema.mjs";

type Values = {
  customerName: string;
  instagramUsername: string;
  consent: boolean;
};
const fields = ["customerName", "instagramUsername", "consent"] as const;

export default function LandingInteractions() {
  const {
    register,
    unregister,
    setValue,
    trigger,
    getFieldState,
    reset,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(registrationSchema),
    defaultValues: { customerName: "", instagramUsername: "", consent: false },
  });
  // Subscribe to validation state, while keeping the existing server-rendered
  // fields and their design. RHF supports manually registered native inputs.
  void errors;
  useEffect(() => {
    fields.forEach((name) => {
      const input = document.getElementById(name) as HTMLInputElement;
      register(name).ref(input);
    });
    const cleanup = initializeLandingPage({
      validateRegistration: async (payload: Values) => {
        setValue("customerName", payload.customerName);
        setValue("instagramUsername", payload.instagramUsername);
        setValue("consent", payload.consent);
        await trigger([...fields]);
        return Object.fromEntries(
          fields.map((name) => [
            name,
            getFieldState(name).error?.message || "",
          ]),
        );
      },
      resetRegistration: () => reset(),
    });
    return () => {
      cleanup();
      unregister([...fields]);
    };
  }, [register, unregister, setValue, trigger, getFieldState, reset]);
  return null;
}
