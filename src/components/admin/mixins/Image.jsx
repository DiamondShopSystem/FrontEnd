import React from 'react'
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail, scale } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { sepia } from "@cloudinary/url-gen/actions/effect";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";
import { format } from "@cloudinary/url-gen/actions/delivery";
import { opacity, brightness } from "@cloudinary/url-gen/actions/adjust";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { png } from "@cloudinary/url-gen/qualifiers/format";
import { focusOn, compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { URLConfig } from "@cloudinary/url-gen";
import { CloudConfig } from "@cloudinary/url-gen";

const Image = ({ uploadedImage }) => {

    // Create and configure your Cloudinary instance.
    // const cld = new Cloudinary({
    //     cloud: {
    //         cloudName: 'dg3bhx2ro'
    //     }
    // });
    // Use the image with public ID, 'front_face'.
    // const myImage = cld.image(uploadedImage);
    let cloudConfig = new CloudConfig({ cloudName: 'dg3bhx2ro' });
    let urlConfig = new URLConfig({ secure: true });

    // Instantiate and configure a CloudinaryImage object.
    let myImage = new CloudinaryImage('image', cloudConfig, urlConfig);

    // The URL of the image is: https://res.cloudinary.com/demo/image/upload/docs/shoes

    // Render the image in a React component.
    // myImage.resize(
    //     thumbnail()
    //       .width(150)
    //       .height(150)
    //       .gravity(focusOn(face())))
    return (
        <>
            <AdvancedImage cldImg={myImage} />
        </>
    )
}

export default Image