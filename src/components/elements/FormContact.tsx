import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form/dist/types";
import * as z from "zod";

const FormDataObj = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Invalid Email" })
    .min(2, { message: "Required" }),
  name: z.string().trim().min(1, { message: "Required" }),
  userMessage: z.string().trim().min(1, { message: "Required" }),
});

const FormContact = () => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const successCountDown = () => {
    setTimeout(() => {
      setSubmitStatus("idle");
    }, 3000);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormDataObj),
  });

  const processForm = async (data: FieldValues) => {
    setSubmitStatus("submitting");

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      console.log(error);
      setSubmitStatus("idle");
      return;
    } else {
      setSubmitStatus("success");
      successCountDown();
    }

    console.log(data);

    reset();
  };

  return (
    <>
      <h2 className=" pt-5 text-center text-2xl">
        WRITE ME YOUR IDEAS
        <br /> or just say hi 👋
      </h2>
      <form
        className="flex  flex-col items-center justify-center gap-4 pt-5 "
        onSubmit={handleSubmit((d) => processForm(d))}
      >
        <div className="form-control ">
          <label className="input-group">
            <span className={errors.name ? "text-error " : ""}>Name</span>
            <input
              {...register("name")}
              type="text"
              placeholder="input your name"
              className={
                "input-bordered input " + (errors.name && "input-error")
              }
            />
          </label>
          {errors.name && (
            <label className="label text-sm text-error">
              * {errors?.name?.message?.toString()}
            </label>
          )}
        </div>
        <div className="form-control ">
          <label className="input-group">
            <span>Email</span>
            <input
              {...register("email")}
              placeholder="input your email"
              className={
                "input-bordered input " + (errors.email && "input-error")
              }
            />
          </label>
          {errors.email && (
            <label className="label text-sm text-error">
              * {errors?.email?.message?.toString()}
            </label>
          )}
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Your message</span>
          </label>
          <textarea
            {...register("userMessage")}
            className={
              "textarea-bordered textarea h-32 " +
              (errors.userMessage && " textarea-error")
            }
            placeholder="input your message"
          />
          {errors.userMessage && (
            <label className="label text-sm text-error">
              * {errors?.userMessage?.message?.toString()}
            </label>
          )}
          {submitStatus === "idle" ? (
            <button className="btn-primary btn mt-6 w-full" type="submit">
              Send Message
            </button>
          ) : submitStatus === "success" ? (
            <button
              className=" btn-success disabled btn mt-6 w-full"
              type="submit"
            >
              Your message has been sent !
            </button>
          ) : (
            <button
              className="loading btn-primary btn mt-6 w-full"
              type="submit"
            >
              Submitting...
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default FormContact;
