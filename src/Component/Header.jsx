import React from 'react'
import Container from './Container'
import { MdOutlineMail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { CiHeart, CiUser } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <section className='bg-[#7E33E0] w-full'>
        <Container>
            <div className="grid xl:grid-cols-2 xs:py-3 xl:py-3">

              <div className="xl:flex items-center xl:gap-6 cursor-pointer">

                <div className="">
                    <div className="flex items-center xs:gap-3 xl:gap-x-2 xs:justify-center">
                      <div className="">
                        <i><MdOutlineMail  className='text-white xs:text-[24px] xl:text-[16px] mt-1'/></i>
                      </div>
                      <div className="">
                        <h2 className='text-white xs:text-[26px] xl:text-[16px] font-josefin'>mhhasanul@gmail.com</h2>
                      </div>
                    </div>
                </div>

                  <div className="">
                     <div className="flex xs:justify-center items-center xs:gap-1 xs:my-2 xl:my-0 xl:gap-x-2">
                      <div className="">
                        <i><FiPhone  className='text-white xs:text-[24px] xl:text-[16px] mt-1'/></i>
                      </div>
                      <div className="">
                        <h2 className='text-white xs:text-[26px] xl:text-[16px] font-josefin'>(12345)67890</h2>
                      </div>
                    </div>
                  </div>
              </div>


                      <div className="flex flex-wrap cursor-pointer xs:justify-between xs:gap-x-0 xs:px-1 xl:px-0 xl:justify-start xl:gap-x-6">

                        <div className="flex items-center xs:gap-x-0 xl:gap-x-1">
                          <div className="">
                            <h2 className='text-white xs:text-[20px] xl:text-[16px] font-josefin'>English</h2>
                          </div>
                          <div className="xs:opacity-0 xl:opacity-111">
                            <i><IoIosArrowDown  className='text-white xl:text-[18px] xl:mt-1'/></i>
                          </div>
                        </div>

                         <div className="flex items-center xl:gap-x-1">
                          <div className="">
                            <h2 className='text-white xs:text-[20px] xl:text-[16px] font-josefin'>USD</h2>
                          </div>
                          <div className="xs:opacity-0 xl:opacity-111">
                            <i><IoIosArrowDown  className='text-white text-[18px] mt-1'/></i>
                          </div>
                        </div>

                         <div className="flex items-center xs:gap-x-0 xl:gap-x-1">
                          <div className="xs:opacity-0 xl:opacity-111">
                            <h2 className='text-white text-[16px] font-josefin'>Login</h2>
                          </div>
                          <div className="">
                            <i><CiUser  className='text-white xs:text-[24px] xl:text-[18px]'/></i>
                          </div>
                        </div>

                         <div className="flex items-center xs:gap-x-0 xl:gap-x-1">
                          <div className="xs:opacity-0 xl:opacity-111">
                            <h2 className='text-white text-[16px] font-josefin'>Wishlist</h2>
                          </div>
                          <div className="">
                            <i><CiHeart  className='text-white xs:text-[24px] xl:text-[18px]'/></i>
                          </div>
                        </div>

                         <div className="flex items-center xs:gap-x-0 xl:gap-x-1">
                          <div className="xs:opacity-0 xl:opacity-111">
                            <h2 className='text-white text-[16px] font-josefin'>Cart</h2>
                          </div>
                          <div className="">
                            <i><IoCartOutline  className='text-white xs:text-[24px] xl:text-[18px]'/></i>
                          </div>
                        </div>
                      </div>

            </div>
        </Container>
    </section>
  )
}

export default Header