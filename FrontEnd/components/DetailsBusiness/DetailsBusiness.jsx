import Image from "next/image";
import React from "react";


const DetailsBusiness = ({name, address, email, telephone, createdAt, business, rating, handleClick, favourite}) => {
  return (
    <div>
      <section className="relative pt-24 pb-36 bg-white overflow-hidden font-cool_g tracking-widest">
        {/* <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          src="flaro-assets/images/contact/gradient.svg"
          alt=""
        /> */}
        <div className="relative z-10 container px-4 mx-auto overflow-hidden">
          <div className="justify-center items-center flex">
          <p className="text-4xl md:text-5xl xl:text-6xl text-center font-bold font-heading tracking-px-n leading-none h-20">
            {name}
          </p>
          <button id={business.data?.id} className={`text-3xl md:text-4xl xl:text-5xl text-center ml-4 md:pb-6 xl:pb-3 pb-8 ${favourite ? "text-red-500 hover:text-gray-500" : "text-gray-500 hover:text-red-500"}`} onClick={(e) => handleClick(e)}>
          &#10084;
          </button>
          </div>

          <div className="flex justify-center items-end">
          <p class="text-4xl mx-1 mb-4"> {rating} </p>
          <span className="text-yellow-300 text-3xl mb-4"> &#9733;</span>
          </div>


          <div className='flex justify-center align-center mt-4'><Image src={business?.data.attributes.BusinessPic.data?.attributes.url} height={650} width={500} alt='/'/> </div>

          
          <p className="mb-20 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">

            Ofrece sus servicios en Bookturn desde: {createdAt}
          </p>
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-indigo-600 rounded-full">
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                      width="32"
                      height="33"
                      viewbox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 11.1666L14.5208 18.1805C15.4165 18.7776 16.5835 18.7776 17.4792 18.1805L28 11.1666M6.66667 25.8333H25.3333C26.8061 25.8333 28 24.6394 28 23.1666V9.83329C28 8.36053 26.8061 7.16663 25.3333 7.16663H6.66667C5.19391 7.16663 4 8.36053 4 9.83329V23.1666C4 24.6394 5.19391 25.8333 6.66667 25.8333Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                  Email
                </h3>
                <p className="font-medium leading-relaxed">{email}</p>
                <p className="font-medium leading-relaxed">support@mail.com</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-3">
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-white border border-blueGray-200 rounded-full">
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                      width="32"
                      height="33"
                      viewbox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z"
                        stroke="#4F46E5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                  Teléfono
                </h3>
                <p className="font-medium leading-relaxed">{telephone}</p>
                <p className="font-medium leading-relaxed">+1 8408 412 569</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-3">
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-white border border-blueGray-200 rounded-full">
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                      width="32"
                      height="33"
                      viewbox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z"
                        stroke="#4F46E5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z"
                        stroke="#4F46E5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                  Dirección
                </h3>
                <p className="font-medium max-w-xs mx-auto leading-relaxed">
                  {address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsBusiness;
