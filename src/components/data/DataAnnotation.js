import dataAnnotationImg1 from "../../assets/images/data-annotation/image-annotation.webp";
import dataAnnotationImg2 from "../../assets/images/data-annotation/land-road-marking-annotation.webp";
import dataAnnotationImg3 from "../../assets/images/data-annotation/object-training.webp";
import dataAnnotationImg4 from "../../assets/images/data-annotation/3d-point-annotation.webp";
import dataAnnotationImg5 from "../../assets/images/data-annotation/video-annotation.webp";
import dataAnnotationImg6 from "../../assets/images/data-annotation/traffic-sign-annotation.webp";
import dataAnnotationImg7 from "../../assets/images/data-annotation/pedrestian.webp";
import dataAnnotationImg8 from "../../assets/images/data-annotation/driver-annotaion.webp";
import dataAnnotationImg9 from "../../assets/images/data-annotation/environmental-content-annotation.webp";
import dataAnnotationImg10 from "../../assets/images/data-annotation/quality-assurence-annotation.webp";

export const DataAnnotation = [
  {
    id: "section1",
    title: "Image Annotation",
    text: "VISTA offers multiple techniques for image annotation, including line and spline annotation, bounding box annotation, polygon annotation, semantic segmentation, instance segmentation, and key point annotation. ",
    path: "/",
    img: dataAnnotationImg1,
    alt: "Image Annotation",
  },
  {
    id: "section2",
    title: "Lane and Road Marking Annotation",
    text: "VISTA provides services for annotating road markings and lanes. Marking lane boundaries and markings is known as 'lane detection,' and it helps with lane-keeping and lane-departure warning systems. ",
    path: "/",
    img: dataAnnotationImg2,
    alt: "Lane and Road Marking Annotation",
  },
  {
    id: "section3",
    title: "Object Tracking",
    text: "Through a sequence of video frames, users can follow moving objects such as cars, pedestrians, and cyclists. ",
    path: "/",
    img: dataAnnotationImg3,
    alt: "Object Tracking",
  },
  {
    id: "section4",
    title: "3D Point Cloud Annotation",
    text: "For this, point cloud data from LiDAR sensors is used to create 3D bounding boxes around objects. ",
    path: "/",
    img: dataAnnotationImg4,
    alt: "3D Point Cloud Annotation",
  },

  {
    id: "section5",
    title: "Video Annotation",
    text: "Turning, stopping, merging, and other driving-related actions and events can be labeled in driving videos with the help of VISTA's Video Annotation service. ",
    path: "/",
    img: dataAnnotationImg5,
    alt: "Video Annotation",
  },
  {
    id: "section6",
    title: "Traffic Sign Annotation",
    text: "Classifying and identifying various traffic sign kinds, such as stop signs and speed limits, is part of this. ",
    path: "/",
    img: dataAnnotationImg6,
    alt: "Traffic Sign Annotation",
  },
  {
    id: "section7",
    title: "Pedestrian and Cyclist Annotation",
    text: "For precise person identification and labeling in photos or videos, VISTA provides services for pedestrian and cyclist annotation. ",
    path: "/",
    img: dataAnnotationImg7,
    alt: "Pedestrian and Cyclist Annotation",
  },
  {
    id: "section8",
    title: "Driver Monitoring Annotation",
    text: "To assist in tracking and analyzing a driver's actions while driving, VISTA provides Driver Monitoring Annotation services. ",
    path: "/",
    img: dataAnnotationImg8,
    alt: "Driver Monitoring Annotation",
  },
  {
    id: "section9",
    title: "Environmental Context Annotation",
    text: "This informs us about the weather, including whether it is snowing or raining, foggy, or full of lightning. For your own safety, especially when driving, this information is crucial. ",
    path: "/",
    img: dataAnnotationImg9,
    alt: "Environmental Context Annotation",
  },
  {
    id: "section10",
    title: "Quality Assurance and Validation",
    text: "In order to guarantee the accuracy and consistency of the annotated data, VISTA provides services for validation and quality assurance. ",
    path: "/",
    img: dataAnnotationImg10,
    alt: "Quality Assurance and Validation",
  },
];
