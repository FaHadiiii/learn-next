import * as Headless from "@headlessui/react";
import clsx from "clsx";
import type React from "react";
import { X } from "lucide-react";
import { Text } from "@/components/text";

const sizes = {
  xs: "sm:max-w-xs",
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl",
};

export function Dialog({
  size = "lg",
  className,
  children,
  onClose,
  ...props
}: {
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
} & Omit<Headless.DialogProps, "as" | "className">) {
  return (
    <Headless.Dialog onClose={onClose} {...props}>
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/25 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 z-20 dark:bg-zinc-950/50"
      />

      <div className="fixed inset-0 w-screen z-30 overflow-y-auto">
        <div className="flex min-h-full items-end sm:items-center justify-center sm:p-4">
          <Headless.DialogPanel
            transition
            className={clsx(
              className,
              sizes[size],
              "relative w-full min-w-0 rounded-t-3xl sm:rounded-2xl bg-white p-(--gutter) ring-1 shadow-lg ring-zinc-950/10 [--gutter:--spacing(8)] dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline",
              "transition duration-100 will-change-transform data-closed:translate-y-12 sm:data-closed:translate-y-0 sm:data-closed:scale-95"
            )}
          >
            {onClose && (
              <button
                onClick={onClose}
                className="z-50 absolute top-4 right-4 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
              </button>
            )}
            {children}
          </Headless.DialogPanel>
        </div>
      </div>
    </Headless.Dialog>
  );
}

export function DialogTitle({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DialogTitleProps,
  "as" | "className"
>) {
  return (
    <Headless.DialogTitle
      {...props}
      className={clsx(
        className,
        "text-lg/6 font-semibold text-balance text-zinc-950 sm:text-base/6 dark:text-white pr-10"
      )}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DescriptionProps<typeof Text>,
  "as" | "className"
>) {
  return (
    <Headless.Description
      as={Text}
      {...props}
      className={clsx(className, "mt-2 text-pretty")}
    />
  );
}

export function DialogBody({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={clsx(className, "mt-6")} />;
}

export function DialogActions({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "mt-8 flex flex-col-reverse items-center justify-end gap-3 :w-full sm:flex-row sm::w-auto"
      )}
    />
  );
}
