"use client";

import { useState } from "react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { Item } from "@/components/ui/item";
import { CirclePlus } from "lucide-react";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/app-dialog";
import { useForm } from "@tanstack/react-form";
import { FieldGroup, FieldError, Field } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { addQuoteSchema } from "../_validations/add-quote-schema";

export function AddQuote() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      quote: "",
    },
    validators: {
      onSubmit: addQuoteSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("✅ Form submitted:", value);
      setIsOpen(false);
    },
  });

  return (
    <Item className="px-0">
      <Button
        variant="outline"
        aria-label="Add"
        onClick={() => setIsOpen(true)}
      >
        <CirclePlus />
        Add Quote
      </Button>

      {isOpen && (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} size="lg">
          <DialogTitle>Add Quote</DialogTitle>
          <DialogDescription>
            It is better to light a single candle than the darkness.
          </DialogDescription>

          <form
            id="add-quote-form"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <DialogBody>
              <FieldGroup>
                <form.Field
                  name="quote"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <Textarea
                          placeholder="Type your quote here..."
                          className="h-30"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
              </FieldGroup>
            </DialogBody>

            <DialogActions className="flex !justify-between w-full">
              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-red-600 text-white w-full sm:w-auto"
              >
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
    </Item>
  );
}
