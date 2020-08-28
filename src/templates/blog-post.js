import React from "react"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import "@browniebroke/gatsby-image-gallery/dist/style.css"

export default function BlogPost({ data }) {
	const post = data.markdownRemark
	console.log(post)
	return (
		<Layout>
			<Typography variant="h3">{post.frontmatter.title}</Typography>
			<Typography variant="subtitle2">{post.frontmatter.date}</Typography>
			<Typography variant="subtitle1" gutterBottom>
				{post.frontmatter.description}
			</Typography>
			<Typography dangerouslySetInnerHTML={{ __html: post.html }} />
		</Layout>
	)
}

export const blogPostQuery = graphql`
	query PostBySlug($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				description
			}
		}
	}
`
