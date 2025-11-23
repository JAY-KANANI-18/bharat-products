'use client';

import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="text-sm bg-no-repeat box-border caret-transparent flex basis-full flex-col grow justify-start leading-[21px] max-w-full text-left px-5 md:text-base md:basis-6/12 md:leading-6 md:max-w-[50%]">
      <div className="text-sm bg-zinc-100 bg-no-repeat box-border caret-transparent leading-[21px] w-full px-10 rounded-[10px] md:text-base md:leading-6">
        <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
          <div className="relative text-sm bg-no-repeat box-border caret-transparent float-left leading-[21px] overflow-hidden -mx-10 rounded-t-[10px] md:text-base md:leading-6">
            <span className="text-sm bg-no-repeat box-border caret-transparent block leading-[0px] md:text-base">
              <img
                src="https://c.animaapp.com/mhypf3xrXgMUxE/assets/img-yellow-demo-6-1280x854.jpg"
                alt="https://amwerk.bold-themes.com/berlin/wp-content/uploads/sites/2/2020/11/img-yellow-demo-6-1280x854.jpg"
                className="text-sm bg-no-repeat box-border caret-transparent max-w-full md:text-base"
              />
            </span>
            <div className="absolute text-sm bg-amber-400/90 bg-no-repeat box-border caret-transparent leading-[21px] pointer-events-none w-full inset-0 md:text-base md:leading-6 md:w-6/12">
              <div className="absolute text-sm items-center bg-no-repeat box-border caret-transparent flex leading-[21px] overflow-hidden inset-0 md:text-base md:leading-6">
                <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] w-full p-10 md:text-base md:leading-6">
                  <div className="text-white text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                    <blockquote className="relative text-[17.5px] bg-no-repeat box-border caret-transparent leading-[26.25px] pt-[35px] font-red_hat_display md:text-xl md:leading-[30px] md:pt-10 before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:text-black before:block before:text-[65.625px] before:not-italic before:normal-nums before:font-black before:left-[-3.28125px] before:tracking-[normal] before:leading-[65.625px] before:list-outside before:list-disc before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:top-0 before:font-red_hat_display before:md:text-[75px] before:md:left-[-3.75px] before:md:leading-[75px] after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-[17.5px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[26.25px] after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-red_hat_display after:md:text-xl after:md:leading-[30px]">
                      <p className="text-[17.5px] bg-no-repeat box-border caret-transparent leading-[26.25px] md:text-xl md:leading-[30px]">
                        There’s always room for improvement in our business,
                        Amwerk really help us with it.
                      </p>
                    </blockquote>
                    <p className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      <strong className="text-sm font-bold bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                        <br className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6" />
                        Adam Ford
                      </strong>
                      <br className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6" />
                      Konstrakt Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-10 md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-foreground/70 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
          <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
              <form
                aria-label="Contact form"
                className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6"
                onSubmit={handleSubmit}
              >
                <fieldset className="text-sm bg-no-repeat box-border caret-transparent hidden leading-[21px] p-0 md:text-base md:leading-6">
                  <input
                    type="hidden"
                    name="_wpcf7"
                    value="1194"
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-black/70 border-t-0 border-b-black/10 border-x-black/70 border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_version"
                    value="6.1.2"
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-black/70 border-t-0 border-b-black/10 border-x-black/70 border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_locale"
                    value="en_US"
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-black/70 border-t-0 border-b-black/10 border-x-black/70 border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_unit_tag"
                    value="wpcf7-f1194-p1124-o1"
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-black/70 border-t-0 border-b-black/10 border-x-black/70 border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_container_post"
                    value="1124"
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-black/70 border-t-0 border-b-black/10 border-x-black/70 border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_posted_data_hash"
                    value=""
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-black/70 border-t-0 border-b-black/10 border-x-black/70 border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_recaptcha_response"
                    value=""
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-black/70 border-t-0 border-b-black/10 border-x-black/70 border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                </fieldset>
                <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                  <div className="text-sm bg-no-repeat box-border caret-transparent flex flex-wrap leading-[21px] ml-[-13.132px] mr-[-13.132px] mb-[17.5px] md:text-base md:leading-6 md:ml-[-15.008px] md:mr-[-15.008px] md:mb-5">
                    <div className="text-sm bg-no-repeat box-border caret-transparent basis-full grow leading-[21px] mb-[8.75px] px-[13.132px] md:text-base md:basis-6/12 md:leading-6 md:mb-0 md:px-[15.008px]">
                      <p className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] mb-3.5 md:text-base md:leading-6 md:mb-4">
                        <span className="relative text-sm bg-no-repeat box-border caret-transparent block leading-[21px] md:text-base md:leading-6 after:accent-auto after:bg-primary after:box-border after:caret-transparent after:text-foreground/70 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-1.5 after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-1.5 after:z-[5] after:rounded-md after:border-separate after:right-[3.5px] after:top-[3.5px] after:font-sanchez after:md:text-base after:md:leading-6 after:md:right-1 after:md:top-1">
                          <input
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            type="text"
                            name="name"
                            className="text-sm bg-transparent box-border caret-transparent block leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-black/70 border-t-0 border-b-black/10 border-x-black/70 border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="text-sm bg-no-repeat box-border caret-transparent basis-full grow leading-[21px] px-[13.132px] md:text-base md:basis-6/12 md:leading-6 md:px-[15.008px]">
                      <p className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] mb-3.5 md:text-base md:leading-6 md:mb-4">
                        <span className="relative text-sm bg-no-repeat box-border caret-transparent block leading-[21px] md:text-base md:leading-6 after:accent-auto after:bg-primary after:box-border after:caret-transparent after:text-foreground/70 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-1.5 after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-1.5 after:z-[5] after:rounded-md after:border-separate after:right-[3.5px] after:top-[3.5px] after:font-sanchez after:md:text-base after:md:leading-6 after:md:right-1 after:md:top-1">
                          <input
                            placeholder="Your Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                            name="email"
                            className="text-sm bg-transparent box-border caret-transparent block leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-black/70 border-t-0 border-b-black/10 border-x-black/70 border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="text-sm bg-no-repeat box-border caret-transparent flex flex-wrap leading-[21px] ml-[-13.132px] mr-[-13.132px] mb-[17.5px] md:text-base md:leading-6 md:ml-[-15.008px] md:mr-[-15.008px] md:mb-5">
                    <div className="text-sm bg-no-repeat box-border caret-transparent basis-full grow leading-[21px] mb-[8.75px] px-[13.132px] md:text-base md:basis-6/12 md:leading-6 md:mb-0 md:px-[15.008px]">
                      <p className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] mb-3.5 md:text-base md:leading-6 md:mb-4">
                        <span className="relative text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                          <input
                            placeholder="Contact phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            type="tel"
                            name="phone"
                            className="text-sm bg-transparent box-border caret-transparent block leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-black/70 border-t-0 border-b-black/10 border-x-black/70 border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="text-sm bg-no-repeat box-border caret-transparent basis-full grow leading-[21px] px-[13.132px] md:text-base md:basis-6/12 md:leading-6 md:px-[15.008px]">
                      <p className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] mb-3.5 md:text-base md:leading-6 md:mb-4">
                        <span className="relative text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                          <div className="relative text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                            <div className="relative text-sm bg-no-repeat box-border caret-transparent h-[43.75px] leading-[44.8px] text-ellipsis text-nowrap overflow-hidden pl-[17.5px] border-t-black/70 border-b-black/10 border-x-black/70 border-b md:text-base md:h-[50px] md:leading-[51.2px] md:pl-5 before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:text-black before:block before:float-right before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[44.8px] before:list-outside before:list-disc before:opacity-30 before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:px-[10.5px] before:border-separate before:font-fontawesome5solid before:md:text-base before:md:leading-[51.2px] before:md:px-3">
                              Project scope
                            </div>
                          </div>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="text-sm bg-no-repeat box-border caret-transparent flex flex-wrap leading-[21px] ml-[-13.132px] mr-[-13.132px] mb-[17.5px] md:text-base md:leading-6 md:ml-[-15.008px] md:mr-[-15.008px] md:mb-5">
                    <div className="text-sm bg-no-repeat box-border caret-transparent basis-full grow leading-[21px] mb-[8.75px] px-[13.132px] md:text-base md:basis-6/12 md:leading-6 md:mb-0 md:px-[15.008px]">
                      <p className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] mb-3.5 md:text-base md:leading-6 md:mb-4">
                        <span className="relative text-sm bg-no-repeat box-border caret-transparent block leading-[21px] md:text-base md:leading-6 after:accent-auto after:bg-primary after:box-border after:caret-transparent after:text-foreground/70 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-1.5 after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-1.5 after:z-[5] after:rounded-md after:border-separate after:right-[3.5px] after:top-[3.5px] after:font-sanchez after:md:text-base after:md:leading-6 after:md:right-1 after:md:top-1">
                          <textarea
                            placeholder="Describe your request"
                            value={formData.message}
                            onChange={handleInputChange}
                            name="message"
                            className="text-sm bg-transparent box-border caret-transparent block leading-[21px] min-h-[43.75px] resize-y text-start w-full px-[17.5px] py-[11.2px] border-black/10 md:text-base md:leading-6 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                          ></textarea>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="text-sm items-center bg-no-repeat box-border caret-transparent flex justify-start leading-[21px] md:text-base md:leading-6">
                    <p className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] mb-3.5 md:text-base md:leading-6 md:mb-4">
                      <input
                        type="submit"
                        value="Submit your request"
                        className="text-white text-sm font-bold bg-primary box-border caret-transparent block leading-[14px] min-h-[43.75px] text-center text-nowrap px-[26.25px] py-3.5 rounded-[50px] md:text-base md:leading-4 md:min-h-[50px] md:px-[30px] md:py-4 hover:shadow-[rgba(0,0,0,0.2)_0px_5px_20px_0px]"
                      />
                    </p>
                  </div>
                </div>
                <div className="text-sm bg-no-repeat box-border caret-transparent hidden leading-[21px] mt-3.5 px-[21px] py-3.5 border-2 border-solid border-black/70 md:text-base md:leading-6 md:mt-4 md:px-6 md:py-4"></div>
              </form>
            </div>
          </div>
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-[60px] md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-foreground/70 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
        </div>
      </div>
    </div>
  );
};

