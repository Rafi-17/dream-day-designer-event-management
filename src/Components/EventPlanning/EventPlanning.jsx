const EventPlanning = () => {
  return (
    <div data-aos='zoom-in' data-aos-achor-placement='center-center'>
        <h2 className="text-4xl font-bold text-center text-cyan-600 mt-16 mb-10">Our Planning</h2>
      <div className="collapse collapse-arrow bg-base-300 py-2">
        <input type="radio" name="my-accordion-3"  />
        <div className="collapse-title text-xl font-medium text-indigo-500">
         Initial Consultation
        </div>
        <div className="collapse-content">
          <p>We begin the process with an initial consultation where we meet with
            you to understand your vision, requirements, goals, and budget for
            the event. Your input is crucial, forming the foundation of our
            planning process.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-300 py-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-indigo-500">
         Event Concept and Design
        </div>
        <div className="collapse-content">
          <p> Collaboratively, we develop a unique theme or concept for your
            event, considering your preferences and the nature of the occasion.
            We create detailed event designs, including decorations, color
            schemes, lighting, and other visual elements, all aligned with the
            chosen theme.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-300 py-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-indigo-500">
         Venue Selection and Logistics
        </div>
        <div className="collapse-content">
          <p> We research and recommend suitable venues based on your
            requirements, including capacity, location, and budget. We handle
            all logistical aspects such as seating arrangements, catering,
            audio-visual setup, transportation, and vendor coordination.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-300 py-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-indigo-500">
         Detailed Planning and Coordination
        </div>
        <div className="collapse-content">
          <p>We create a detailed event timeline, including setup, rehearsal (if
            applicable), the main event, and teardown. Communication is key; we
            ensure everyone involved, including you and our team, is
            well-informed. We handle troubleshooting and unexpected issues to
            keep everything on track.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-300 py-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-indigo-500">
         Event Execution and Follow-Up
        </div>
        <div className="collapse-content">
          <p>On the day of the event, we oversee every aspect to ensure
            everything runs smoothly. We are available for any last-minute
            changes or concerns. After the event, we gather feedback from you to
            ensure your satisfaction and to continuously improve our services.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-300 py-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-indigo-500">
         Client Involvement and Feedback
        </div>
        <div className="collapse-content">
          <p>Your involvement is encouraged at every stage. We value your
            feedback after the event, using it to enhance our services further
            and provide you with the best possible experience.</p>
        </div>
      </div>
    </div>
  );
};

export default EventPlanning;
