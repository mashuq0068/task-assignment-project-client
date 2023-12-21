

// components/AboutUs.js



const AboutUs = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className=" text-gray-600">
  Welcome to our task management platform, where efficiency meets simplicity! Our mission is to empower individuals and teams by providing a seamless solution to organize tasks and boost productivity. We understand the challenges of modern life, and we believe in making task management an effortless and enjoyable experience. At our core, we are driven by a passion for creating tools that adapt to your unique needs. Whether you're a busy professional juggling multiple projects or a student managing assignments, our platform is designed to streamline your workflow. Our commitment is to deliver a user-friendly environment that fosters collaboration and cultivates a sense of accomplishment. With a focus on innovation, we continually evolve our features to stay ahead of the curve. Our team is dedicated to enhancing your productivity, allowing you to focus on what matters most. Join us on this journey of organization and efficiency – together, let's make every day more productive and fulfilling!
</p>

      {/* Add more content and details here */}

      {/* Responsive Images */}
      <img
        className="mt-8 mx-auto sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
        src="https://tse4.mm.bing.net/th?id=OIP.p45aF9sH5vyCCSUe7Vd7dgHaEK&pid=Api&P=0&h=220"
        alt="About Us"
      />
    </div>
  );
};

export default AboutUs;
