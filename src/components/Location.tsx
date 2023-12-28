import { FaLocationArrow } from "react-icons/fa";

export default function Location() {
  return (
    <section id="location" className="flex flex-col gap-5 py-10">
      <h2 className="font-bold text-2xl flex gap-1 items-center">
        <FaLocationArrow /> Our Location
      </h2>
      <div className="flex flex-col gap-14 p-2">
        <iframe
          className="rounded-xl box-border shadow-md"
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.0626743349044!2d55.40161448280335!3d25.167361517290995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67ddf9cb2817%3A0x7e7f313464d471c4!2sAlabda%20alhandsy%20Technical%20services!5e0!3m2!1sen!2sjp!4v1703760407267!5m2!1sen!2sjp"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
