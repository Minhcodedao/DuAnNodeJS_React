import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Online Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
        <p className="text-lg mb-4">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat
  ante eget magna feugiat, vel dapibus tortor interdum. Donec nec posuere arcu,
  nec rhoncus orci. Fusce sed fermentum leo, et efficitur libero. Duis vitae
  tristique elit. Integer sit amet justo quis mauris efficitur vestibulum vel at
  ipsum. Phasellus consectetur velit vitae fermentum fringilla. Vivamus
  consectetur, odio a dapibus dapibus, odio odio vestibulum quam, vitae fermentum
  mauris orci id enim.
</p>
<p className="text-lg mb-4">
  Vestibulum id suscipit lectus, sed posuere magna. Integer a diam pretium,
  posuere nulla eget, malesuada arcu. Quisque eu nulla eu urna pellentesque
  sagittis. Fusce eget ex vel mi ullamcorper ullamcorper. Nullam vel massa non
  magna volutpat pretium. Nulla ornare lacus vitae vestibulum euismod. Proin
  dignissim dolor id metus laoreet, nec molestie ipsum consectetur.
</p>
<p className="text-lg mb-4">
  Phasellus ultrices odio eget elit gravida condimentum. In hac habitasse platea
  dictumst. Integer vel semper mi. Donec pulvinar sem at justo eleifend dictum.
  Cras at aliquet nulla, ut lobortis mauris. Nunc pharetra tortor id malesuada
  venenatis. Vestibulum fermentum eget eros ac placerat. Vivamus ut nunc orci.
</p>

        </div>
        <div>
          <img
            src="https://picsum.photos/id/23/200/300"
            alt="About Us"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="https://picsum.photos/id/233/200/300"
              alt="Team Member 1"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-lg mt-2">John Doe - CEO</p>
          </div>
          <div>
            <img
              src="https://picsum.photos/id/235/200/300"
              alt="Team Member 2"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-lg mt-2">Jane Smith - COO</p>
          </div>
          <div>
            <img
              src="https://picsum.photos/id/236/200/300"
              alt="Team Member 3"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-lg mt-2">David Johnson - CTO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
