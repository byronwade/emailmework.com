"use client";
import MainMenu from "@/components/mainMenu";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
	{ id: 1, name: "Wade Cooper" },
	{ id: 2, name: "Arlene Mccoy" },
	{ id: 3, name: "Devon Webb" },
	{ id: 4, name: "Tom Cook" },
	{ id: 5, name: "Tanya Fox" },
	{ id: 6, name: "Hellen Schmidt" },
	{ id: 7, name: "Caroline Schultz" },
	{ id: 8, name: "Mason Heaney" },
	{ id: 9, name: "Claudie Smitham" },
	{ id: 10, name: "Emil Schaefer" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const [selected, setSelected] = useState(people[3]);

	return (
		<main>
			<div className="flex w-full md:flex-row">
				<MainMenu />
				<form className="container mx-auto my-40 max-w-3xl">
					<div className="bg-brown-600 mb-10 rounded-md">
						<div className="mb-4 rounded-md p-8 md:flex md:items-center md:justify-between">
							<div className="min-w-0 flex-1">
								<h2 className="text-2xl font-bold leading-7 text-black sm:truncate sm:text-3xl sm:tracking-tight">Get Leads</h2>
								<p>Once you signup</p>
							</div>
						</div>
					</div>
					<div className="space-y-12">
						<div className="rounded-md bg-[#252525] px-4 py-12 md:px-10">
							<h2 className="text-base font-semibold leading-7 text-white">Notifications</h2>
							<p className="mt-1 text-sm leading-6 text-gray-400">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div className="sm:col-span-4">
									<label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
										Job Name
									</label>
									<div className="mt-2">
										<input type="email" name="email" id="email" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" placeholder="you@example.com" aria-describedby="email-description" />
									</div>
									<p className="mt-2 text-sm text-gray-500" id="email-description">
										We'll only use this for spam.
									</p>
								</div>

								<div className="sm:col-span-4">
									<label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
										Job Categories
									</label>
									<div className="mt-2">
										<Listbox value={selected} onChange={setSelected}>
											{({ open }) => (
												<>
													<div className="relative mt-2">
														<Listbox.Button className="focus:ring-brown-500 relative w-full cursor-default rounded-md bg-white/5 py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6">
															<span className="block truncate">{selected.name}</span>
															<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
																<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
															</span>
														</Listbox.Button>

														<Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
															<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#282828] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
																{people.map((person) => (
																	<Listbox.Option key={person.id} className={({ active }) => classNames(active ? "bg-brown-600 text-white" : "text-white", "relative cursor-default select-none py-2 pl-3 pr-9")} value={person}>
																		{({ selected, active }) => (
																			<>
																				<span className={classNames(selected ? "font-semibold" : "font-normal", "block truncate")}>{person.name}</span>

																				{selected ? (
																					<span className={classNames(active ? "text-white" : "text-brown-600", "absolute inset-y-0 right-0 flex items-center pr-4")}>
																						<CheckIcon className="h-5 w-5" aria-hidden="true" />
																					</span>
																				) : null}
																			</>
																		)}
																	</Listbox.Option>
																))}
															</Listbox.Options>
														</Transition>
													</div>
												</>
											)}
										</Listbox>
									</div>
									<p className="mt-2 text-sm text-gray-500" id="email-description">
										We'll only use this for spam.
									</p>
								</div>

								<div className="col-span-full">
									<label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
										About
									</label>
									<div className="mt-2">
										<textarea id="about" name="about" rows={3} className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" defaultValue={""} />
									</div>
									<p className="mt-3 text-sm leading-6 text-gray-400">Write a few sentences about yourself.</p>
								</div>

								<div className="col-span-full">
									<label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-white">
										Upload Photos
									</label>
									<div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
										<div className="text-center">
											<PhotoIcon className="mx-auto h-12 w-12 text-gray-500" aria-hidden="true" />
											<div className="mt-4 flex text-sm leading-6 text-gray-400">
												<label htmlFor="file-upload" className="focus-within:ring-brown-600 hover:text-brown-500 relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-900">
													<span>Upload a file</span>
													<input id="file-upload" name="file-upload" type="file" className="sr-only" />
												</label>
												<p className="pl-1">or drag and drop</p>
											</div>
											<p className="text-xs leading-5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-md bg-[#252525] px-4 py-12 md:px-10">
							<h2 className="text-base font-semibold leading-7 text-white">Personal Information</h2>
							<p className="mt-1 text-sm leading-6 text-gray-400">Use a permanent address where you can receive mail.</p>

							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div className="sm:col-span-3">
									<label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
										First name
									</label>
									<div className="mt-2">
										<input type="text" name="first-name" id="first-name" autoComplete="given-name" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
									</div>
								</div>

								<div className="sm:col-span-3">
									<label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
										Last name
									</label>
									<div className="mt-2">
										<input type="text" name="last-name" id="last-name" autoComplete="family-name" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
									</div>
								</div>

								<div className="sm:col-span-4">
									<label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
										Email address
									</label>
									<div className="mt-2">
										<input id="email" name="email" type="email" autoComplete="email" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
									</div>
								</div>

								<div className="sm:col-span-3">
									<label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
										Country
									</label>
									<div className="mt-2">
										<select id="country" name="country" autoComplete="country-name" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 [&_*]:text-black">
											<option>United States</option>
											<option>Canada</option>
											<option>Mexico</option>
										</select>
									</div>
								</div>

								<div className="col-span-full">
									<label htmlFor="street-address" className="block text-sm font-medium leading-6 text-white">
										Street address
									</label>
									<div className="mt-2">
										<input type="text" name="street-address" id="street-address" autoComplete="street-address" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
									</div>
								</div>

								<div className="sm:col-span-2 sm:col-start-1">
									<label htmlFor="city" className="block text-sm font-medium leading-6 text-white">
										City
									</label>
									<div className="mt-2">
										<input type="text" name="city" id="city" autoComplete="address-level2" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
									</div>
								</div>

								<div className="sm:col-span-2">
									<label htmlFor="region" className="block text-sm font-medium leading-6 text-white">
										State / Province
									</label>
									<div className="mt-2">
										<input type="text" name="region" id="region" autoComplete="address-level1" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
									</div>
								</div>

								<div className="sm:col-span-2">
									<label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-white">
										ZIP / Postal code
									</label>
									<div className="mt-2">
										<input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-md bg-[#252525] px-4 py-12 md:px-10">
							<h2 className="text-base font-semibold leading-7 text-white">Notifications</h2>
							<p className="mt-1 text-sm leading-6 text-gray-400">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

							<div className="mt-10 space-y-10">
								<fieldset>
									<legend className="text-sm font-semibold leading-6 text-white">By Email</legend>
									<div className="mt-6 space-y-6">
										<div className="relative flex gap-x-3">
											<div className="flex h-6 items-center">
												<input id="comments" name="comments" type="checkbox" className="text-brown-600 focus:ring-brown-600 h-4 w-4 rounded-md border-white/10 bg-white/5 focus:ring-offset-gray-900" />
											</div>
											<div className="text-sm leading-6">
												<label htmlFor="comments" className="font-medium text-white">
													Comments
												</label>
												<p className="text-gray-400">Get notified when someones posts a comment on a posting.</p>
											</div>
										</div>
										<div className="relative flex gap-x-3">
											<div className="flex h-6 items-center">
												<input id="candidates" name="candidates" type="checkbox" className="text-brown-600 focus:ring-brown-600 h-4 w-4 rounded-md border-white/10 bg-white/5 focus:ring-offset-gray-900" />
											</div>
											<div className="text-sm leading-6">
												<label htmlFor="candidates" className="font-medium text-white">
													Candidates
												</label>
												<p className="text-gray-400">Get notified when a candidate applies for a job.</p>
											</div>
										</div>
										<div className="relative flex gap-x-3">
											<div className="flex h-6 items-center">
												<input id="offers" name="offers" type="checkbox" className="text-brown-600 focus:ring-brown-600 h-4 w-4 rounded-md border-white/10 bg-white/5 focus:ring-offset-gray-900" />
											</div>
											<div className="text-sm leading-6">
												<label htmlFor="offers" className="font-medium text-white">
													Offers
												</label>
												<p className="text-gray-400">Get notified when a candidate accepts or rejects an offer.</p>
											</div>
										</div>
									</div>
								</fieldset>
								<fieldset>
									<legend className="text-sm font-semibold leading-6 text-white">Push Notifications</legend>
									<p className="mt-1 text-sm leading-6 text-gray-400">These are delivered via SMS to your mobile phone.</p>
									<div className="mt-6 space-y-6">
										<div className="flex items-center gap-x-3">
											<input id="push-everything" name="push-notifications" type="radio" className="text-brown-600 focus:ring-brown-600 h-4 w-4 border-white/10 bg-white/5 focus:ring-offset-gray-900" />
											<label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-white">
												Everything
											</label>
										</div>
										<div className="flex items-center gap-x-3">
											<input id="push-email" name="push-notifications" type="radio" className="text-brown-600 focus:ring-brown-600 h-4 w-4 border-white/10 bg-white/5 focus:ring-offset-gray-900" />
											<label htmlFor="push-email" className="block text-sm font-medium leading-6 text-white">
												Same as email
											</label>
										</div>
										<div className="flex items-center gap-x-3">
											<input id="push-nothing" name="push-notifications" type="radio" className="text-brown-600 focus:ring-brown-600 h-4 w-4 border-white/10 bg-white/5 focus:ring-offset-gray-900" />
											<label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-white">
												No push notifications
											</label>
										</div>
									</div>
								</fieldset>
							</div>
						</div>
					</div>

					<div className="mt-10 flex items-center justify-end gap-x-6">
						<button type="button" className="text-sm font-semibold leading-6 text-white">
							Cancel
						</button>
						<button type="submit" className="bg-brown-500 hover:bg-brown-400 focus-visible:outline-brown-500 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
							Save
						</button>
					</div>
				</form>
			</div>
		</main>
	);
}
