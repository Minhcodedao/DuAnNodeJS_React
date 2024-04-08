import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { addProduct } from "@/services/product";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

type Inputs = {
  _id?: number | string;
  name: string;
  category?: string;
  price: number;
  //   gallery?: string[];
  description: string;
  discount: number;
  featured: boolean;
  image: string;
  countInStock: number;
};

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string(),
  //   gallery: Joi.array().items(Joi.string()),
  description: Joi.string(),
  image: Joi.string(),
  discount: Joi.number(),
  featured: Joi.boolean(),
  countInStock: Joi.number(),
});
//
const ProductAdd = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: joiResolver(productSchema),
    defaultValues: {
      name: "",
      price: 0,
      category: "",
      //   gallery: [],
      description: "",
      image: "",
      discount: 0,
      featured: false,
      countInStock: 0,
    },
  });

  //
  const mutation = useMutation({
    mutationFn: async (product: IProduct) => {
      const { data } = await addProduct(product);
      return data;
    },
    onSuccess: () => {
      form.reset();
      toast({ title: "Thêm sản phẩm thành công", variant: "success" });
    },
  });

  //
  const onSubmit: SubmitHandler<Inputs> = (product) => {
    mutation.mutate(product);
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input {...field} id="name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="price">Price</FormLabel>
                <FormControl>
                  <Input {...field} id="price" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="category">Category</FormLabel>
                <FormControl>
                  <Input {...field} id="category" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          {/* <FormField
            control={form.control}
            name="gallery"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="gallery">Category</FormLabel>
                <FormControl>
                  <Input {...field} id="gallery" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField> */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="image">Image</FormLabel>
                <FormControl>
                  <Input {...field} id="image" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="description">description</FormLabel>
                <FormControl>
                  <Input {...field} id="description" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="discount"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="discount">Discount</FormLabel>
                <FormControl>
                  <Input {...field} id="discount" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="featured"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Featured?</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          <Button type="submit" variant="destructive">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProductAdd;
