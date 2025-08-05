export default function AboutSection() {
  return (
    <section className="max-w-screen-lg md:px-20 px-5 mx-auto mt-8" id="about">
      <div className="flex md:flex-row flex-col md:gap-0 gap-2">
        <p className="md:w-2/6 text-xl font-semibold md:text-left text-center">
          About
        </p>
        <h3 className="md:w-4/6 text-sm text-justify leading-6">
          Full stack Web Developer with over 3 years of experience designing and
          building scalable web applications across digital media, UAV control
          systems, and enterprise platforms. Skilled in Laravel, TypeScript
          (React, Vue), real-time communication protocols like Socket.IO and
          MQTT, and implementing secure authentication methods. Experienced in
          improving user experience through reusable UI components and features
          integrated with Google Analytics. Passionate about clean architecture,
          CI/CD automation, and delivering robust solutions in agile
          environments. Strong collaborator committed to driving impactful
          projects from concept to deployment.
        </h3>
      </div>
    </section>
  );
}
