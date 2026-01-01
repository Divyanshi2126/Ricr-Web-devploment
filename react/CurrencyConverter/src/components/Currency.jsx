import React from "react";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  console.log(Countrydata);

  const Currency = () => {
    return (
      <>
        <div className="bg-amber-50">
          <div className="w-3xl bg-white rounded shadow border p-3">
            <div className="grid grid-cols-2">
              <select
                name="from"
                value={from}
                onChange={(e) => setfrom(e.target.value)}
                className="border p-3 rounded overflow-hidden"
              >
                <option value="">-select Country</option>
                {Countrydata.map((country, idx) => (
                  <option
                    vlaue={country.CurrencyCode + "" + country.CountryName}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
              </select>
              <select
                name="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              >
                <option value="">-select country</option>
              </select>
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default Currency;
