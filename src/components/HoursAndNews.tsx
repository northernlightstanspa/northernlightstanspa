export default function HoursAndNews() {
  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Hours of Operation */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-500 mb-4 underline decoration-orange-500 underline-offset-4">
              Hours of Operation
            </h3>
            <div className="text-gray-700 text-sm space-y-1">
              <p className="font-medium">Northern Lights Tan & Wellness – Cedarburg</p>
              <p>W51 N731 Keup Rd, Cedarburg, WI 53012</p>
              <p>Tel: 262-387-1485</p>
              <div className="mt-4">
                <p className="font-medium underline">Hours:</p>
                <p>Monday – Thursday 10:00am – 7:00pm</p>
                <p>Friday 10:00am – 6:00pm</p>
                <p>Saturday 9:00am – 3:00pm</p>
                <p>Sunday 10:00am – 3:00pm</p>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}
