"use client"
import ContactFormWithSocialButtons from "../components/contact"
import LargeWithNewsletter from "../components/footer"
import Nav from "../components/header"



export default function Contact() {
    return (
<>
<Nav></Nav>
<ContactFormWithSocialButtons></ContactFormWithSocialButtons>
<LargeWithNewsletter></LargeWithNewsletter>
</>
    )
}