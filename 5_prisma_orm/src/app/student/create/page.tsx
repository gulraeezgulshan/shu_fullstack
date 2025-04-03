"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

//Define Form Schema
const formSchema = z.object({
	firstName: z
		.string({ message: "First name must contain atleast 2 chars" })
		.min(2)
		.max(50),
	lastName: z.string().min(2).max(50),
	studentId: z.string().min(2).max(50),
	semester: z.string().min(2).max(50),
	gpa: z.string().min(2).max(50),
});

const StudentPage = () => {
	//Form Definition
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			studentId: "",
			semester: "Spring 2025",
			gpa: "4.0",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<div className="flex items-center justify-center w-full m-10">
			<div className="w-[600px] p-6">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8"
					>
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First name</FormLabel>
									<FormControl>
										<Input
											placeholder="e.g John"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last name</FormLabel>
									<FormControl>
										<Input
											placeholder="e.g Doe"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="studentId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Student Id</FormLabel>
									<FormControl>
										<Input
											placeholder="e.g. FC123456"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="semester"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Semester</FormLabel>
									<FormControl>
										<Input
											placeholder="e.g. Spring 2025"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="gpa"
							render={({ field }) => (
								<FormItem>
									<FormLabel>GPA</FormLabel>
									<FormControl>
										<Input
											placeholder="e.g 3.2"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Save</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default StudentPage;
