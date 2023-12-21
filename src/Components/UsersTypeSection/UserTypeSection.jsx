

const UserTypesSection = () => {
  return (
    <section className="bg-gray-100 py-8">
    <h2 className="text-3xl font-semibold text-center mb-6">Who Benefits from This Website?</h2>
    <div className="flex flex-wrap justify-center">
      {/* User Type: Developers */}
      <div className="user-type bg-white p-6 rounded-lg shadow-md mx-4 mb-4 w-64">
        <img  src="https://cdn.filestackcontent.com/efbSR18hT5uRKuo0zoMA" alt="Developer" className="w-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Developers</h3>
        <p className="text-gray-700">This website provides tools and resources for developers .</p>
      </div>

      {/* User Type: Corporate Professionals */}
      <div className="user-type bg-white p-6 rounded-lg shadow-md mx-4 mb-4 w-64">
        <img  src="https://tse2.mm.bing.net/th?id=OIP.yk2I82MVPSrnUd1RqosqqQHaE8&pid=Api&P=0&h=220" alt="Corporate Professional" className="w-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Corporate Professionals</h3>
        <p className="text-gray-700">Corporate professionals can leverage this platform for work.</p>
      </div>

      {/* User Type: Bankers */}
      <div className="user-type bg-white p-6 rounded-lg shadow-md mx-4 mb-4 w-64">
        <img  src="https://tse1.mm.bing.net/th?id=OIP.9kq5dujit8yfBuIGpqKlhwHaEK&pid=Api&P=0&h=220" alt="Banker" className="w-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Bankers</h3>
        <p className="text-gray-700">Banking professionals find valuable tools and insights for accounts</p>
      </div>

      {/* User Type: Designers */}
      <div className="user-type bg-white p-6 rounded-lg shadow-md mx-4 mb-4 w-64">
        <img  src="https://tse4.mm.bing.net/th?id=OIP.Q0qIZbdfS1Ew3ez6UexTqQHaE8&pid=Api&P=0&h=220" alt="Designer" className="w-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Designers</h3>
        <p className="text-gray-700">Designers can explore creative resources and inspiration for design tasks</p>
      </div>

      {/* Add more user types as needed */}
    </div>
  </section>
  );
};

export default UserTypesSection;
