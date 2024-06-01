import { useState } from "react";

const FormComponent = () => {
    const [selectedProf, setSelectedProf] = useState('');
    const [selectedGoal, setSelectedGoal] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

  return (
    <div className="h-[28.4rem] w-[20.4375rem] bg-white rounded-[0.625rem]">
      <h1 className="h-[1.6875rem] font-nova text-[0.75rem] font-bold text-center bg-[#E84D84] text-white p-[0.375rem] rounded-t-[0.625rem]">
        {'FILL THE FORM BELOW TO ENQUIRE'}
      </h1>
        <div className=" flex flex-col gap-[1.25rem] p-[0.625rem]">
            <form className="flex flex-col gap-[0.625rem]">
                <div className="w-[19.1875rem] h-[3.875rem] flex flex-col gap-[0.6875rem]">
                <label className="block text-[#505050] text-[0.8rem] font-semibold font-ping" htmlFor="name">
                    {'*Enter your name'}
                </label>
                <input
                    className="px-3 py-2 border border-[#D9D9D9] rounded h-[2.1875rem] font-ping text-[0.8475rem]"
                    type="text"
                    id="name"
                    placeholder="Eg. Aneesha Mehra"
                    required
                />
                </div>
                <div className="w-[19.1875rem] h-[3.875rem] flex flex-col gap-[0.6875rem]">
                <label className="block text-[#505050] text-[0.8rem] font-semibold font-ping" htmlFor="mobile">
                    {'*Enter your WhatsApp Number'}
                </label>
                <div className="flex flex-row gap-[0.6875rem]">
                    <select
                        className="pl-2 border border-[#D9D9D9] rounded h-[2.1875rem] w-[3.75rem] font-ping text-[0.8475rem]"
                        id="countrycode"
                        required
                    >
                        <option value="1">+91</option>
                        <option value="2">+92</option>
                        <option value="3">+93</option>
                    </select>
                    <input
                        className="px-3 py-2 border border-[#D9D9D9] rounded h-[2.1875rem] w-[14.75rem] font-ping text-[0.8475rem]"
                        type="text"
                        id="number"
                        placeholder="Eg. 0000000000"
                        required
                    />
                </div>
                </div>
                <div className="w-[19.1875rem] h-[3.875rem] flex flex-col gap-[0.6875rem]">
                <label className="block text-[#505050] text-[0.8rem] font-semibold font-ping" htmlFor="profession">
                    {'*Select your profession'}
                </label>
                <select
                    className={`px-3 py-2 border border-[#D9D9D9] rounded h-[2.1875rem] font-ping text-[0.8475rem]  ${!selectedProf ? 'text-[#BFBFBF]' : 'text-black'}`}
                    id="profession"
                    value={selectedProf}
                    onChange={(e) => setSelectedProf(e.target.value)}
                    required
                >
                    <option value="" disabled selected>Choose the most relevant option</option>
                    <option value="profession1">Profession 1</option>
                    <option value="profession2">Profession 2</option>
                    <option value="profession3">Profession 3</option>
                </select>
                </div>
                <div className="w-[19.1875rem] h-[3.875rem] flex flex-col gap-[0.6875rem]">
                <label className="block text-[#505050] text-[0.8rem] font-semibold font-ping" htmlFor="goal">
                    {'*Select your goal'}
                </label>
                <select
                    className={`px-3 py-2 border border-[#D9D9D9] rounded h-[2.1875rem] font-ping text-[0.8475rem]  ${!selectedGoal ? 'text-[#BFBFBF]' : 'text-black'}`}
                    id="goal"
                    value={selectedGoal}
                    onChange={(e) => setSelectedGoal(e.target.value)}
                    required
                >
                    <option value="" disabled selected>Choose the most relevant option</option>
                    <option value="goal1">Goal 1</option>
                    <option value="goal2">Goal 2</option>
                    <option value="goal3">Goal 3</option>
                </select>
                </div>
                <div className="w-[19.1875rem] h-[3.875rem] flex flex-col gap-[0.6875rem]">
                <label className="block text-[#505050] text-[0.8rem] font-semibold font-ping" htmlFor="city">
                    {'*Select your city'}
                </label>
                <select
                    className={`px-3 py-2 border border-[#D9D9D9] rounded h-[2.1875rem] font-ping text-[0.8475rem]  ${!selectedCity ? 'text-[#BFBFBF]' : 'text-black'}`}
                    id="city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    required
                >
                    <option value="" disabled selected>Choose the most relevant option</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                    <option value="city3">City 3</option>
                </select>
                </div>
            </form>
            <button
                className="w-[19.1875rem] h-[2.25rem] bg-gradient-to-r from-[#F56563] to-[#E54988] text-white text-sm font-nova font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-[#E54988] hover:to-[#F56563] active:scale-95 active:bg-gradient-to-r active:from-[#D9437D] active:to-[#C63474]"
                type="submit"
                >
                Submit
            </button>
        </div>
    </div>
  );
};

export {FormComponent};
