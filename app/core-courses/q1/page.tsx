'use client'
import CourseTop from "@/app/components/courses_breadcrumb";
import Footer from "@/app/components/footer";
import Nav from "@/app/components/header";


export default function quarterOne() {
  return (
    <>
    <Nav></Nav>
    <CourseTop coursetype="Core Track" coursedesc="Every participant of the program will cover the following 3 quarters" coursetitle="Common In All Specializations"></CourseTop>
    <Footer></Footer>
 </> )
}
