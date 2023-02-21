"use client"
import CourseTop from "../components/Contact/breadCrum"
import ContactFormWithSocialButtons from "../components/Contact/contact"
import LargeWithNewsletter from "../components/footer"
import Nav from "../components/header"



export default function Contact() {
    return (
<>
<Nav></Nav>
<CourseTop coursetitle="Contact Us"></CourseTop>
<ContactFormWithSocialButtons></ContactFormWithSocialButtons>
<LargeWithNewsletter></LargeWithNewsletter>
</>
    )
}