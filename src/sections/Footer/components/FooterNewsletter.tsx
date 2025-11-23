'use client';

import { useState } from 'react';

export const FooterNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription:', email);
  };

  return (
    <div className="text-sm bg-no-repeat box-border caret-transparent flex basis-full flex-col justify-start leading-[21px] max-w-full px-5 md:text-base md:basis-[33.3333%] md:leading-6 md:max-w-[33.3333%]">
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] w-full md:text-base md:leading-6">
        <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-10 md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both hidden leading-[0px] mb-[50px] md:text-base md:block before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
          <header className="relative text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6 after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base after:md:leading-6">
            <h4 className="relative text-xl font-bold bg-no-repeat box-border caret-transparent clear-both tracking-[-0.6px] leading-5 font-red_hat_display after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-xl after:not-italic after:normal-nums after:font-bold after:tracking-[-0.6px] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-red_hat_display">
              <span className="relative bg-no-repeat box-border caret-transparent inline-block z-[1]">
                <span className="bg-no-repeat box-border caret-transparent block before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-xl before:not-italic before:normal-nums before:font-bold before:tracking-[-0.6px] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-red_hat_display after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-xl after:not-italic after:normal-nums after:font-bold after:tracking-[-0.6px] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-red_hat_display">
                  Connect with us
                </span>
              </span>
            </h4>
          </header>
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-5 md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
          <div className="text-sm bg-no-repeat box-border caret-transparent float-left justify-center leading-[14px] max-w-full pr-[7px] md:text-base md:leading-4 md:pr-2">
            <a
              href="https://www.facebook.com/boldthemes/"
              className="text-primary text-sm content-center items-center bg-no-repeat box-border caret-transparent flex justify-start leading-[14px] md:text-base md:leading-4 before:accent-auto before:content-center before:items-center before:bg-no-repeat before:box-border before:caret-transparent before:text-primary before:flex before:flex-col before:text-xl before:not-italic before:normal-nums before:font-normal before:justify-center before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:min-w-5 before:order-1 before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:rounded-[50%] before:border-separate before:font-fontawesome5brands"
            ></a>
          </div>
          <div className="text-sm bg-no-repeat box-border caret-transparent float-left justify-center leading-[14px] max-w-full ml-[9.1px] pr-[7px] md:text-base md:leading-4 md:ml-[10.4px] md:pr-2">
            <a
              href="https://twitter.com/bold_themes"
              className="text-primary text-sm content-center items-center bg-no-repeat box-border caret-transparent flex justify-start leading-[14px] md:text-base md:leading-4 before:accent-auto before:content-center before:items-center before:bg-no-repeat before:box-border before:caret-transparent before:text-primary before:flex before:flex-col before:text-xl before:not-italic before:normal-nums before:font-normal before:justify-center before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:min-w-5 before:order-1 before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:rounded-[50%] before:border-separate before:font-fontawesome5brands"
            ></a>
          </div>
          <div className="text-sm bg-no-repeat box-border caret-transparent float-left justify-center leading-[14px] max-w-full ml-[9.1px] pr-[7px] md:text-base md:leading-4 md:ml-[10.4px] md:pr-2">
            <a
              href="#"
              className="text-primary text-sm content-center items-center bg-no-repeat box-border caret-transparent flex justify-start leading-[14px] md:text-base md:leading-4 before:accent-auto before:content-center before:items-center before:bg-no-repeat before:box-border before:caret-transparent before:text-primary before:flex before:flex-col before:text-xl before:not-italic before:normal-nums before:font-normal before:justify-center before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:min-w-5 before:order-1 before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:rounded-[50%] before:border-separate before:font-fontawesome5brands"
            ></a>
          </div>
          <div className="text-sm bg-no-repeat box-border caret-transparent float-left justify-center leading-[14px] max-w-full ml-[9.1px] pr-[7px] md:text-base md:leading-4 md:ml-[10.4px] md:pr-2">
            <a
              href="#"
              className="text-primary text-sm content-center items-center bg-no-repeat box-border caret-transparent flex justify-start leading-[14px] md:text-base md:leading-4 before:accent-auto before:content-center before:items-center before:bg-no-repeat before:box-border before:caret-transparent before:text-primary before:flex before:flex-col before:text-xl before:not-italic before:normal-nums before:font-normal before:justify-center before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:min-w-5 before:order-1 before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:rounded-[50%] before:border-separate before:font-fontawesome5brands"
            ></a>
          </div>
          <div className="text-sm bg-no-repeat box-border caret-transparent float-left justify-center leading-[14px] max-w-full ml-[9.1px] pr-[7px] md:text-base md:leading-4 md:ml-[10.4px] md:pr-2">
            <a
              href="https://www.behance.net/info1afc201a"
              className="text-primary text-sm content-center items-center bg-no-repeat box-border caret-transparent flex justify-start leading-[14px] md:text-base md:leading-4 before:accent-auto before:content-center before:items-center before:bg-no-repeat before:box-border before:caret-transparent before:text-primary before:flex before:flex-col before:text-xl before:not-italic before:normal-nums before:font-normal before:justify-center before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:min-w-5 before:order-1 before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:rounded-[50%] before:border-separate before:font-fontawesome5brands"
            ></a>
          </div>
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-[25px] md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
          <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            <p className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
              Subscribe to our newsletter to receive the latest news, releases,
              updates and special offers from Amwerk.
            </p>
          </div>
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-[25px] md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
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
                    value="1206"
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-white border-t-0 border-b-black/10 border-x-white border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_version"
                    value="6.1.2"
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-white border-t-0 border-b-black/10 border-x-white border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_locale"
                    value="en_US"
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-white border-t-0 border-b-black/10 border-x-white border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_unit_tag"
                    value="wpcf7-f1206-p1124-o2"
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-white border-t-0 border-b-black/10 border-x-white border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_container_post"
                    value="1124"
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-white border-t-0 border-b-black/10 border-x-white border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_posted_data_hash"
                    value=""
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-white border-t-0 border-b-black/10 border-x-white border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_recaptcha_response"
                    value=""
                    className="text-sm bg-transparent box-border caret-transparent hidden leading-[14px] min-h-[43.75px] text-start w-full px-[17.5px] py-[11.2px] border-t-white border-t-0 border-b-black/10 border-x-white border-x-0 border-b md:text-base md:leading-4 md:min-h-[50px] md:px-5 md:py-[12.8px]"
                  />
                </fieldset>
                <div className="text-white/70 text-[16.002px] box-border caret-transparent leading-[21px] md:text-[18.288px] md:leading-6">
                  <div className="relative text-[16.002px] bg-no-repeat box-border caret-transparent flex leading-[21px] mb-[20.0025px] md:text-[18.288px] md:leading-6 md:mb-[22.86px]">
                    <div className="text-[16.002px] bg-no-repeat box-border caret-transparent basis-full grow leading-[21px] md:text-[18.288px] md:leading-6">
                      <p className="text-[16.002px] bg-no-repeat box-border caret-transparent leading-[21px] mb-[16.002px] md:text-[18.288px] md:leading-6 md:mb-[18.288px]">
                        <span className="relative text-[16.002px] bg-no-repeat box-border caret-transparent leading-[21px] md:text-[18.288px] md:leading-6">
                          <input
                            placeholder="Email address"
                            value={email}
                            onChange={handleEmailChange}
                            type="email"
                            name="email"
                            className="text-white text-base bg-transparent box-border caret-transparent block leading-4 min-h-[50px] text-start w-full px-5 py-[12.8px] border-t-white border-t-0 border-b-white/30 border-x-white border-x-0 border-b"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="text-[16.002px] items-center bg-no-repeat box-border caret-transparent flex flex-col justify-start leading-[21px] md:text-[18.288px] md:leading-6">
                      <p className="text-[16.002px] bg-no-repeat box-border caret-transparent leading-[21px] mb-[16.002px] md:text-[18.288px] md:leading-6 md:mb-[18.288px]">
                        <input
                          type="submit"
                          value=""
                          className="text-white text-base font-bold bg-primary box-border caret-transparent block h-[50px] leading-[50px] min-h-[50px] text-center text-nowrap w-[50px] p-0 rounded-[50px] border-t-white border-t-0 border-b-white/30 border-x-white border-x-0 border-b font-fontawesome5solid hover:shadow-[rgba(0,0,0,0.2)_0px_5px_20px_0px]"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-sm bg-no-repeat box-border caret-transparent hidden leading-[21px] mt-3.5 px-[21px] py-3.5 border-2 border-solid border-white md:text-base md:leading-6 md:mt-4 md:px-6 md:py-4"></div>
              </form>
            </div>
          </div>
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-10 md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
        </div>
      </div>
    </div>
  );
};

