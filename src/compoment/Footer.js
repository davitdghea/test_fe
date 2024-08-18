import React from 'react'
import { FaAngleDown } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='w-full  max-w-[1410px] mt-[100px] mx-auto'>
            <div className='flex justify-between border-b-2 max-sm:flex-col'>
                <div className='w-[340px] '>
                    <p className='mb-[30px]'>
                        <svg width="92" height="20" viewBox="0 0 92 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7589 1.22502V11.5418C11.7828 12.1366 11.6692 12.7288 11.4271 13.2723C11.2348 13.6985 10.9516 14.0772 10.5974 14.3816C10.2896 14.6292 9.93633 14.8139 9.55764 14.9252C8.89595 15.139 8.184 15.139 7.52231 14.9252C7.12213 14.8171 6.74654 14.6326 6.41615 14.3816C6.05874 14.0776 5.77183 13.6991 5.57546 13.2723C5.34294 12.7261 5.23341 12.1353 5.25468 11.5418V0.00476074H0.000413445V11.5418C-0.0106251 12.7278 0.199465 13.9054 0.619864 15.014C1.00606 16.0111 1.59355 16.9176 2.34547 17.6763C3.11709 18.4276 4.03629 19.0094 5.04451 19.3847C6.16345 19.7955 7.34861 19.9949 8.53998 19.9727C9.73203 19.9913 10.9172 19.7882 12.0354 19.3736C13.0437 18.9983 13.9629 18.4165 14.7345 17.6653C15.4878 16.9098 16.0723 16.0022 16.449 15.0029C16.8605 13.8922 17.0667 12.7155 17.0574 11.5307V1.22502V0.00476074H11.7589V1.22502Z" fill="#111111" />
                            <path d="M36.1158 0.00512695H35.9941L30.4633 8.77991C30.4633 8.77991 24.7555 0.00512695 24.7224 0.00512695H19.3132V19.973H24.7224V9.55643L30.4302 17.6434L35.961 9.55643V19.973H41.3811V18.7528V1.22539V0.00512695H36.1158Z" fill="#111111" />
                            <path d="M43.6594 1.22539V10.1998V18.7639V19.3185V19.9841H44.2899H48.3053H48.9469V19.3407V10.1998L48.9579 1.22539V0.00512695H43.6594V1.22539Z" fill="#111111" />
                            <path d="M91.2025 6.11735C90.6984 4.93333 89.9738 3.85655 89.0676 2.94468C88.1567 2.03499 87.0836 1.30496 85.904 0.792583C84.6799 0.269587 83.363 0 82.0324 0C80.7019 0 79.385 0.269587 78.1609 0.792583C76.9801 1.29677 75.9091 2.02788 75.0083 2.94468C74.1135 3.86131 73.397 4.93727 72.8955 6.11735C72.374 7.34498 72.1052 8.66561 72.1052 10C72.1052 11.3344 72.374 12.655 72.8955 13.8826C73.4036 15.0645 74.1277 16.1406 75.0304 17.0553C75.9312 17.9721 77.0022 18.7032 78.183 19.2074C79.4071 19.7304 80.724 20 82.0546 20C83.3851 20 84.702 19.7304 85.9261 19.2074C87.1057 18.695 88.1789 17.965 89.0897 17.0553C89.996 16.1434 90.7205 15.0667 91.2246 13.8826C91.7538 12.6541 92.0176 11.3271 91.9989 9.98891C92.0062 8.65675 91.7349 7.33785 91.2025 6.11735ZM86.4239 11.8859C86.1843 12.4726 85.8394 13.0103 85.4062 13.4722C84.9702 13.9335 84.4526 14.3097 83.8797 14.5815C83.3064 14.8557 82.6786 14.996 82.0435 14.992C81.4048 14.9962 80.7734 14.8559 80.1962 14.5815C79.6283 14.3121 79.1176 13.9355 78.6918 13.4722C78.2622 13.0097 77.921 12.472 77.6852 11.8859C77.4323 11.2858 77.3043 10.6403 77.3091 9.98891C77.3204 8.70203 77.814 7.46649 78.6918 6.52781C79.1201 6.06736 79.6303 5.69114 80.1962 5.41848C80.7734 5.14412 81.4048 5.00382 82.0435 5.00803C82.6786 5.00396 83.3064 5.14429 83.8797 5.41848C84.4507 5.69357 84.9678 6.06931 85.4062 6.52781C85.8439 6.98192 86.1895 7.51689 86.4239 8.10305C86.6684 8.70177 86.796 9.34195 86.8 9.98891C86.7991 10.6398 86.6714 11.2842 86.4239 11.8859Z" fill="#111111" />
                            <path d="M65.2634 0.00512695H64.5886V0.681817V1.22539V5.28553H69.854V1.22539V0.681817V0.00512695H69.2456H65.2634Z" fill="#111111" />
                            <path d="M56.6238 0.00512695H55.949H51.8894H51.8784H51.2036V0.681817V1.22539V5.28553V18.7639V19.3074V19.9841H51.8894H55.949H56.6238V19.3074V18.7639V8.41383L64.5882 19.9841H69.1787H69.8535V19.3074V18.7639V17.8098L60.2631 5.28553L56.6238 0.00512695Z" fill="#111111" />
                        </svg>
                    </p>
                    <div className='text-left '>
                        <p className='mb-[30px] '>268 St, South New York/NY 98944, United States<br />
                            +222-1800-2628<br />
                            blueskytechcompany@gmail.com</p>
                        <div className='flex '>
                            <svg className='mr-[5px]' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="17.5" stroke="#555555" />
                                <path d="M21.6 12H14.4C13.0745 12 12 13.0745 12 14.4V21.6C12 22.9255 13.0745 24 14.4 24H21.6C22.9255 24 24 22.9255 24 21.6V14.4C24.0001 13.0745 22.9255 12 21.6 12ZM20.4 13.8H22.2V15.6H20.4V13.8ZM18 15.6001C19.3255 15.6001 20.4 16.6746 20.4 18.0001C20.4 19.3255 19.3255 20.4 18 20.4C16.6745 20.4 15.6 19.3255 15.6 18.0001C15.6 16.6746 16.6745 15.6001 18 15.6001ZM22.8 21.6001C22.8 22.2628 22.2627 22.8001 21.6 22.8001H14.4C13.7373 22.8001 13.2 22.2628 13.2 21.6001V17.4H14.46C14.0996 19.3553 15.3926 21.2325 17.3479 21.5929C19.3032 21.9533 21.1804 20.6603 21.5408 18.705C21.5836 18.4725 21.6035 18.2364 21.6 18.0001C21.597 17.7987 21.577 17.598 21.54 17.4001H22.8V21.6001H22.8Z" fill="#555555" />
                            </svg>
                            <svg className='mr-[5px]' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="17.5" stroke="#555555" />
                                <path d="M16.9886 24C15.9308 24 14.9163 23.5966 14.1682 22.8785C13.4202 22.1604 13 21.1864 13 20.1709C13 19.1554 13.4202 18.1814 14.1682 17.4633C14.9163 16.7452 15.9308 16.3418 16.9886 16.3418H17.9625V18.2105H16.9886C16.5841 18.2105 16.1886 18.3257 15.8522 18.5415C15.5159 18.7572 15.2537 19.0639 15.0989 19.4227C14.9441 19.7815 14.9036 20.1764 14.9825 20.5573C15.0614 20.9382 15.2562 21.2881 15.5423 21.5627C15.8283 21.8373 16.1928 22.0243 16.5896 22.1001C16.9864 22.1759 17.3976 22.137 17.7714 21.9883C18.1452 21.8397 18.4646 21.588 18.6894 21.2651C18.9141 20.9422 19.0341 20.5626 19.0341 20.1742V12H20.9807V12.9338C20.9807 13.4546 21.1962 13.9541 21.5798 14.3223C21.9634 14.6906 22.4836 14.8975 23.0261 14.8975H24V16.7629H23.0193C22.2984 16.7639 21.591 16.5753 20.9739 16.2175V20.1709C20.973 21.1856 20.5529 22.1586 19.8058 22.8764C19.0587 23.5942 18.0456 23.9983 16.9886 24Z" fill="#555555" />
                            </svg>
                            <svg className='mr-[5px]' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="17.5" stroke="#555555" />
                                <path d="M24.9882 14.5648C24.8236 13.9529 24.3412 13.4706 23.7294 13.3058C22.6117 13 18.1411 13 18.1411 13C18.1411 13 13.6706 13 12.5529 13.2942C11.9529 13.4588 11.4587 13.953 11.2941 14.5648C11 15.6823 11 18 11 18C11 18 11 20.3294 11.2941 21.4352C11.4589 22.047 11.9411 22.5294 12.553 22.6941C13.6823 23 18.1412 23 18.1412 23C18.1412 23 22.6117 23 23.7294 22.7058C24.3413 22.5411 24.8236 22.0588 24.9884 21.447C25.2824 20.3294 25.2824 18.0118 25.2824 18.0118C25.2824 18.0118 25.2942 15.6823 24.9882 14.5648ZM16.7177 20.1412V15.8588L20.4353 18L16.7177 20.1412Z" fill="#555555" />
                            </svg>
                            <svg className='mr-[5px]' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="17.5" stroke="#555555" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9184 12H12.066L16.5298 18.6281L12 24H13.5877L17.2347 19.6747L20.1476 24H24L19.3764 17.1347L23.7059 12H22.1183L18.6714 16.0879L15.9184 12ZM17.4993 17.9239L14.2821 13.2286H15.2134L17.9508 17.2237L18.3878 17.8614L21.7755 22.8054H20.8442L17.9793 18.6242L17.4993 17.9239Z" fill="#555555" />
                            </svg>
                            <svg className='mr-[5px]' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="17.5" stroke="#555555" />
                                <path d="M16.3334 14.6667V16H15V18H16.3334V24H19V18H20.7734L21 16H19V14.8334C19 14.2934 19.0533 14.0067 19.8866 14.0067H21V12H19.2134C17.08 12.0001 16.3334 13 16.3334 14.6667Z" fill="#555555" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div >
                    <div className='max-w-[120px]'>
                        <p className=' font-semibold mb-[30px]'>Hot Categories</p>
                        <div >
                            <p className='gap-2 text-left'>Special Offers
                                Performance
                                T-shirts
                                Underwear
                                Top Brands
                                Online Exclusive</p> 
                        </div>
                    </div>
                </div>
                
                <div className='max-w-[137px] gap-2'>
                        <p className=' font-semibold mb-[30px]'>Customer Service</p>
                    <p className='gap-2 text-left'>
                            Privacy Policy
                            Refund Policy
                            Shipping & Return
                            Term & Conditions
                            Advanced Search
                            Theme FAQs
                            Store Locations
                        </p>
                    </div>
                
                <div className='gap-2 mb-[80px]'>
                    <div className='max-w-[450px] text-left mb-[30px]'>
                        <p className=' font-semibold mb-[30px] text-left' >Sign Up to Newsletter</p>
                        <p>Enter your email address to get $10 off your first order and free
                            shipping. Updates information on Sales and Offers.</p>

                    </div>
                    <div className='flex'>
                        <input className=' w-[290px] rounded-full py-2 border outline-none' placeholder='Enter your email...' />
                        <div className=' w-[150px] rounded-full py-2 bg-black text-white'>
                            <p>Subscribe</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between mt-[36px] max-sm:flex-col max-sm:justify-center max-sm:gap-3'>
                <div className='flex '>
                    <p className='flex items-center mr-[5px]'>English <FaAngleDown /></p>
                    <p>United States (USD $)</p>
                </div>
                <div>
                    <p>© 2023 Umino Store. All Rights Reserved.</p>
                </div>
                <div className='max-w-[321px] justify-between flex'>
                    <img className="w-[43px] h-[20px] mr-[5px]" src='https://s3-alpha-sig.figma.com/img/89dc/01ec/49111a8bbc3eff24c08d4eccc2a8069a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mvs4iJO5gdeGtrWIGvFu9~x8FJ7I3XOwrcBiearmQEJh-QPFmCc4kFKa5vcykDcRW6tiMmc74KBrBTciw2-GaWDv5geBqOFDpVWU7AEEQTn1bPCVfvxuW03K7d-VL-3nn1DfKJQqvWHovhgZGPr~d5tLbJWRcOXlJZFqhfqpUrwx2ilHryOJijPqj6m3LFFjLkouN0aqyr2GCGx2sYNehgZpVVMb~BFb2zmsO7nS-BSxspN5r8WSPFzn10k9~fLDBGTOD7v5mR8ISF5C9VEzjApgKGWt0eWleRGis2CMeLtNTg-~Jouja4VwqErQKgJO8muiNr3wz1jqJcmNwFcylg__' alt=''/>
                    <img className="w-[43px] h-[20px] mr-[5px]"  src='https://s3-alpha-sig.figma.com/img/9098/9882/e93ef86aa316ada5a33924b9f71c893c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UQb0BNRjyHQHp8whG7CitAoqTeKuomEdzeWHP0lmYvDOocI3JnrLJWY0FPeGMd7NB-spDABfVUHXUCnbzeVUj5EBlTmTzDOp3Q2Dc5Vh-GVKJWrfeGNzZAJpCVw634m4MTflv95xXLWQBd3VxCS410OmGLfcQo6zGn5OMu1YfR1ZjfPJvqZpU-5Y5UiBaYqgfeu~tBI9in8ZMRnRTOx9EaXvIGTDVNm0iD6s2iLj2LTREkd8IMQLutL21i6ooLi885W3F-Fon~ZxJkO4482LxTi3-MeH3fe9a6cfMAE77AcPDTS~jBWVY92zyvgGBMLWDkcgxPMR8-J~qta3d6GF~Q__' alt=''/>
                    <img className="w-[43px] h-[20px] mr-[5px]"  src='https://s3-alpha-sig.figma.com/img/c4eb/b175/8e9d557fb4381eebc1599c8dc1ee93dc?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Macedkn5EqC6b421a54F61HaweNHqQ1yL2ar1tjaigWhvqexCKG3nxUL5WqjAQtKOfswhAyIiR9s1LH8UGWrrS-bpyCihbmWFvrSgmeA8FkKdhA~Wmz3vGWjOWkrYl8hTcm7NQ92ouR9O~nRxKTJvCY14pABxZnxRZca0SRfBBF-Svnpi~UtWy~wrSFIyQC8UsZhuw-HN0tV4HMaL9l6f8yjUvPr3vM1QC5qLQrDrJjKi2l4H77L5ZxS7ep85EPA8pVYb3MxzOiamKNXc9YIlOY5lTxrcvc68v34DHDuNTeE1d3u9rLlnIbWXnflZi~qaOKGct~xHaup5Qr9up4Jhw__' alt=''/>
                    <img className="w-[43px] h-[20px] mr-[5px]"  src='https://s3-alpha-sig.figma.com/img/83f8/a74c/ce75c6586989bf19de9772d37d13c1ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TQr3C08TxGuM3afwAJGALNun7UFhkR2fPkjPfC8tt~cHeGnLxIzGQ9WqMx4hb89YmGqml-ihS3Iol4HqxqLHG9OpMjYWN-psN8FVNCrKnz4Px4RWUV4xveXhVmlat2tiJ6Ac1Wkit-ohXXZJjAvrtC1K92I8nWC1Ww1V4adbjWtlspLqXh8ifV9XQTEEkxuyENW0I824dkhZF7ymgNkskpAtK70afAcjINIyU4SuqwGPrX4vxqiMwttJEH6LvNcMhEwODgr4H2eYEA-FpzA4aTRi2-f49jAk123owazcGRSvz8Uz0aU5cUBS72Sd36Oc7xyM3BPX3PQhFtlxoaAs0Q__' alt='' />
                    <img className="w-[43px] h-[20px] mr-[5px]"  src='https://s3-alpha-sig.figma.com/img/4b9d/8642/da95cc23087b1451572eb14c816e1c1c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QOgB8ALO8rBepvrv9fwrpSiAxVqpC6vtC7DEAvyhJyKkaDYKDDF~AqYSSPKJuhk-dVJ19d1zdijjmbevdOWs5NN~iZnst8btOCY4UtaY7Ehf21lA8uaoepiN9lcKPe6atcV3FWimYIY6hUaIJo0nCIVuPyHTeyTpU6h876lMgfQtP1GjSijrY~tBBSLTPipbg8dmjIKtXlwQvCRJvkapU6RvBkGJNtSJAhgVMEMZ5A5rMYAjl~Jnhbq5U5ZsjOp3F3SASFatEwWKO9~XIGoLrYjbWohS2IISloYCxYtICMq-RKRUkWABOm93-kWqIDyA1qYnUiXTOw12M7fS0EOL-g__' alt=''/>
                    <img className="w-[43px] h-[20px] mr-[5px]"  src='https://s3-alpha-sig.figma.com/img/877c/b819/d5904537b566fdcfc7c1894ef676ad76?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hr7HKndgVd~oS~x~zmIuR1SBM1kKg1X6b~HyeOUT0zRNQvblbdh2Mg2Z2jknRhYl~4YNAu9Z54V2K43aZCdk2AFwZgAMmE~XMHY4VUayst3lp1YkhE7GiCyQ2XdZki9KZk2ehQM4iZeqkrwpkzOXUJ8q0cA4yBJsP458c6QgggMk9i7q6rEIJj-ufDGVU0QLh-Ts8ggxZR-K6XE4PzB1v7MAcsAOYClLSZEw5xMXTwc85vVOSLgLNsX1akdLOJzXyr19HJiUlNS61gpyfx59D4kx11GO7J-b3vaYNOlxVkyv5tmu9QtiRjyr-6CoOovml9cCdJDFfIfRJD2veM5wbw__' alt='' />
                    <img className="w-[43px] h-[20px] mr-[5px]"  src='https://s3-alpha-sig.figma.com/img/7b31/a827/d75252ad72726f5492b341b6f420f5e6?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c9QOcbnA61A0cuKFMmN1moS25xZHTXDr-kIdY0qRS7mXD-~GbmGw4~TyS5Z5SEkZbzCZKh0pn7YfVclzEiMH2f0-TXqgpRfJ5P3p3gHWxkWgiRZoerSWbNnFfAYI-FRor91X8QSyuahpMRE0wPune~b8ygIpJVu9net9FbZx7rVP5P2Wf0tvAkTz9Qqptr42VTV-2J4okfito0qsH~7RcfFZ7aGBT5yYUm1gLspjzOXBsLfkPnmuG7vq7PlV7PXj4~bDf23ajrHHtwAbzQgC-Q9f5tF~-M0Hmut46fpfnMlHk~7jBygrCEfXeYejNMPeUOKTdFwjT3Wo89mxeFa9ug__' alt='' />
                </div>
            </div>
        </div>
    )
}

export default Footer