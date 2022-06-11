/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nav".
 */
export interface Navigation {
	id: string
	links?: {
		type: 'url' | 'page'
		label: string
		page: string | Page
		url: string
		id?: string
	}[]
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
	id: string
	_status?: 'draft' | 'published'
	slug?: string
	lastModifiedBy?: string
	createdBy?: string
	page: string
	meta?: {
		title?: string
		description?: string
		keywords?: string
		image?: Media
	}
	content: (
		| {
				use: boolean
				heading: string
				posts: (string | Blog)[]
				id?: string
				blockName?: string
				blockType: 'blog-posts'
		  }
		| {
				useForm: boolean
				id?: string
				blockName?: string
				blockType: 'contact-form'
		  }
		| {
				email: string
				id?: string
				blockName?: string
				blockType: 'email'
		  }
		| {
				text: string
				id?: string
				blockName?: string
				blockType: 'text'
		  }
		| {
				textarea: string
				id?: string
				blockName?: string
				blockType: 'textarea'
		  }
		| {
				texts: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'textareas'
		  }
		| {
				heading: string
				size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
				id?: string
				blockName?: string
				blockType: 'heading'
		  }
		| {
				headings: {
					heading: string
					size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'headings'
		  }
		| {
<<<<<<< HEAD
				image?: Media
=======
				image?: string | Media
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
				id?: string
				blockName?: string
				blockType: 'image'
		  }
		| {
				images: {
<<<<<<< HEAD
					image?: Media
=======
					image?: string | Media
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'images'
		  }
		| {
				imageField?: {
<<<<<<< HEAD
					image: Media
=======
					image: string | Media
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
					hasText?: boolean
					texts: {
						text: string
						id?: string
					}[]
					hasLink?: boolean
					link?: {
						type: 'url' | 'page'
						label: string
						page: string | Page
						url: string
					}
				}
				id?: string
				blockName?: string
				blockType: 'image-custom'
		  }
		| {
				images: {
					imageField?: {
<<<<<<< HEAD
						image: Media
=======
						image: string | Media
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
						hasText?: boolean
						texts: {
							text: string
							id?: string
						}[]
						hasLink?: boolean
						link?: {
							type: 'url' | 'page'
							label: string
							page: string | Page
							url: string
						}
					}
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'image-custom-multiple'
		  }
		| {
				type: 'url' | 'page'
				label: string
				page: string | Page
				url: string
				id?: string
				blockName?: string
				blockType: 'link'
		  }
		| {
				links: {
					type: 'url' | 'page'
					label: string
					page: string | Page
					url: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'links'
		  }
		| {
				linkGroup?: {
					heading: string
					link?: {
						type: 'url' | 'page'
						label: string
						page: string | Page
						url: string
						id?: string
					}[]
				}
				id?: string
				blockName?: string
				blockType: 'link-group'
		  }
		| {
				groups: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'text-groups'
		  }
		| {
				header: string
				text: string
				id?: string
				blockName?: string
				blockType: 'text-header'
		  }
		| {
				groups: {
					header: string
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'text-header-group'
		  }
		| {
				header: string
				text: string
				id?: string
				blockName?: string
				blockType: 'textarea-header'
		  }
		| {
				groups: {
					header: string
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'textarea-header-group'
		  }
		| {
				header: string
				texts: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-text-header'
		  }
		| {
				groups: {
					header: string
					texts: {
						text: string
						id?: string
					}[]
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-text-header-group'
		  }
		| {
				images?: {
<<<<<<< HEAD
					image: Media
=======
					image: string | Media
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
					id?: string
				}[]
				headings?: {
					heading: string
					size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
					id?: string
				}[]
				text?: {
					body: string
					id?: string
				}[]
				ctas?: {
					type: 'url' | 'page'
					label: string
					page: string | Page
					url: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'hero'
		  }
		| {
				blocks: (
					| {
							use: boolean
							heading: string
							posts: (string | Blog)[]
							id?: string
							blockName?: string
							blockType: 'blog-posts'
					  }
					| {
							useForm: boolean
							id?: string
							blockName?: string
							blockType: 'contact-form'
					  }
					| {
							email: string
							id?: string
							blockName?: string
							blockType: 'email'
					  }
					| {
							text: string
							id?: string
							blockName?: string
							blockType: 'text'
					  }
					| {
							textarea: string
							id?: string
							blockName?: string
							blockType: 'textarea'
					  }
					| {
							texts: {
								text: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'textareas'
					  }
					| {
							heading: string
							size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
							id?: string
							blockName?: string
							blockType: 'heading'
					  }
					| {
							headings: {
								heading: string
								size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'headings'
					  }
					| {
<<<<<<< HEAD
							image?: Media
=======
							image?: string | Media
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
							id?: string
							blockName?: string
							blockType: 'image'
					  }
					| {
							images: {
<<<<<<< HEAD
								image?: Media
=======
								image?: string | Media
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'images'
					  }
					| {
							imageField?: {
<<<<<<< HEAD
								image: Media
=======
								image: string | Media
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
								hasText?: boolean
								texts: {
									text: string
									id?: string
								}[]
								hasLink?: boolean
								link?: {
									type: 'url' | 'page'
									label: string
									page: string | Page
									url: string
								}
							}
							id?: string
							blockName?: string
							blockType: 'image-custom'
					  }
					| {
							images: {
								imageField?: {
<<<<<<< HEAD
									image: Media
=======
									image: string | Media
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
									hasText?: boolean
									texts: {
										text: string
										id?: string
									}[]
									hasLink?: boolean
									link?: {
										type: 'url' | 'page'
										label: string
										page: string | Page
										url: string
									}
								}
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'image-custom-multiple'
					  }
					| {
							type: 'url' | 'page'
							label: string
							page: string | Page
							url: string
							id?: string
							blockName?: string
							blockType: 'link'
					  }
					| {
							links: {
								type: 'url' | 'page'
								label: string
								page: string | Page
								url: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'links'
					  }
					| {
							linkGroup?: {
								heading: string
								link?: {
									type: 'url' | 'page'
									label: string
									page: string | Page
									url: string
									id?: string
								}[]
							}
							id?: string
							blockName?: string
							blockType: 'link-group'
					  }
					| {
							groups: {
								text: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'text-groups'
					  }
					| {
							header: string
							text: string
							id?: string
							blockName?: string
							blockType: 'text-header'
					  }
					| {
							groups: {
								header: string
								text: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'text-header-group'
					  }
					| {
							header: string
							text: string
							id?: string
							blockName?: string
							blockType: 'textarea-header'
					  }
					| {
							groups: {
								header: string
								text: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'textarea-header-group'
					  }
					| {
							header: string
							texts: {
								text: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'multiple-text-header'
					  }
					| {
							groups: {
								header: string
								texts: {
									text: string
									id?: string
								}[]
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'multiple-text-header-group'
					  }
				)[]
				id?: string
				blockName?: string
				blockType: 'section'
		  }
	)[]
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
	id: string
	url?: string
	filename?: string
	mimeType?: string
	filesize?: number
	lastModifiedBy?: string
	name: string
	alt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blog".
 */
export interface Blog {
	id: string
	_status?: 'draft' | 'published'
	slug?: string
	lastModifiedBy?: string
	createdBy?: string
	created?: string
	updated?: string
	title: string
	meta?: {
		title?: string
		description?: string
		keywords?: string
	}
<<<<<<< HEAD
	image: Media
=======
	image: string | Media
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
	readTime: number
	content: {
		hasImage: boolean
		imageField?: {
<<<<<<< HEAD
			image: Media
=======
			image: string | Media
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
			hasText?: boolean
			texts: {
				text: string
				id?: string
			}[]
			hasLink?: boolean
			link?: {
				type: 'url' | 'page'
				label: string
				page: string | Page
				url: string
			}
		}
		text: string
		id?: string
	}[]
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-info".
 */
export interface ContactInformation {
	id: string
	phone?: string
	email?: string
	address?: string
	other?: (
		| {
				text: string
				id?: string
				blockName?: string
				blockType: 'text'
		  }
		| {
				textarea: string
				id?: string
				blockName?: string
				blockType: 'textarea'
		  }
		| {
				groups: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'text-groups'
		  }
		| {
				type: 'url' | 'page'
				label: string
				page: string | Page
				url: string
				id?: string
				blockName?: string
				blockType: 'link'
		  }
		| {
				linkGroup?: {
					heading: string
					link?: {
						type: 'url' | 'page'
						label: string
						page: string | Page
						url: string
						id?: string
					}[]
				}
				id?: string
				blockName?: string
				blockType: 'link-group'
		  }
	)[]
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "seo".
 */
export interface Seo {
	id: string
	siteName: string
	description: string
<<<<<<< HEAD
	favicon: Media
	image?: Media
=======
	favicon: string | Media
	image?: string | Media
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "social-media".
 */
export interface SocialMedia {
	id: string
	links?: {
		type: 'url' | 'page'
		label: string
		page: string | Page
		url: string
		id?: string
	}[]
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
	id: string
	copyright: string
	other: (
		| {
				groups: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'text-groups'
		  }
		| {
				header: string
				text: string
				id?: string
				blockName?: string
				blockType: 'text-header'
		  }
		| {
				groups: {
					header: string
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'text-header-group'
		  }
		| {
				header: string
				text: string
				id?: string
				blockName?: string
				blockType: 'textarea-header'
		  }
		| {
				groups: {
					header: string
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'textarea-header-group'
		  }
		| {
				header: string
				texts: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-text-header'
		  }
		| {
				groups: {
					header: string
					texts: {
						text: string
						id?: string
					}[]
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-text-header-group'
		  }
		| {
				type: 'url' | 'page'
				label: string
				page: string | Page
				url: string
				id?: string
				blockName?: string
				blockType: 'link'
		  }
		| {
				links: {
					type: 'url' | 'page'
					label: string
					page: string | Page
					url: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'links'
		  }
		| {
				linkGroup?: {
					heading: string
					link?: {
						type: 'url' | 'page'
						label: string
						page: string | Page
						url: string
						id?: string
					}[]
				}
				id?: string
				blockName?: string
				blockType: 'link-group'
		  }
	)[]
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
	id: string
	email?: string
	resetPasswordToken?: string
	resetPasswordExpiration?: string
	loginAttempts?: number
	lockUntil?: string
	name: string
	role: 'user' | 'admin' | 'superuser'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "submissions".
 */
export interface Submission {
	id: string
	submitted?: string
	source: string
	name: string
	email: string
	phone?: string
	message: string
}
