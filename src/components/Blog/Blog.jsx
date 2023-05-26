import React from 'react';
import vector from "../../assets/images/vector.png"
import vectorOne from "../../assets/images/vector-one.png"

const Blog = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-[#F8F9FF] to-[#FAF8FF] pb-[140px] pt-[40px] relative'>
                <h1 className='text-center font-extrabold text-[#1A1919] text-[32px]'>Blogs</h1>
                <img className='absolute left-0 bottom-0' src={vector} alt="" />
            </div>
            <img className='absolute right-0 top-0' src={vectorOne} alt="" />

            <div className='mb-10 mt-28'>
                <div class="lg:w-[80%] md:w-[90%] w-[90%] mx-auto text-left">
                    <div class="mt-12 grid lg:grid-cols-2 gap-5">
                        <div class="rounded-lg py-12 border border-blue-200 px-11 text-justify bg-[#FAF8FF]">
                            <h2 class=" text-[#414141] font-bold text-2xl">1. When should you use context API?</h2>
                            <p class="text-[#414141] text-base mt-[10px]">The Context API in React should be used when you need to share data or state between multiple components at different levels of your component tree, without passing it explicitly through props. It's useful in scenarios such as managing themes, authentication state, localization, app-wide configurations, and simpler state management needs within a localized scope. Context API helps avoid prop drilling and provides a more convenient way to share data across components that need access to the same data, making your code more maintainable and scalable. However, it's important to consider the complexity and size of your application, and evaluate whether using a state management library might be more appropriate for your specific use case.</p>
                        </div>
                        <div class="rounded-lg py-12 border border-blue-200 px-11 text-justify bg-[#FAF8FF]">
                            <h2 class=" text-[#414141] font-bold text-2xl">2. What is a custom hook?</h2>
                            <p class="text-[#414141] text-base mt-[10px]">A custom hook in React is a JavaScript function that starts with the word "use" and encapsulates reusable logic that can be shared among components. It allows you to extract and reuse common functionality, such as state management, side effects, or other behaviors, across different components. Custom hooks promote code reusability, separation of concerns, and clean component code. They are created using regular JavaScript functions, can use other hooks, and can be used in multiple components to make your code more modular and maintainable.</p>
                        </div>
                        <div class="rounded-lg py-12 border border-blue-200 px-11 text-justify bg-[#FAF8FF]">
                            <h2 class="text-[#414141] font-bold text-2xl">3. What is useRef?</h2>
                            <p class="text-[#414141] text-base mt-[10px]">useRef is a hook in React that creates a mutable reference to a value or a DOM element that persists across component renders. It allows you to directly access and modify the value or properties of an element without triggering a re-render of the component. useRef is commonly used for tasks that involve interacting with the DOM, such as getting input values, setting focus on an element, or managing animations or scroll positions. Refs are created using useRef(initialValue), can hold any mutable value, and are used in combination with other hooks or effects to perform side effects or manage component lifecycle. Refs should be used judiciously as they bypass the typical React data flow and can make code harder to understand if used improperly.</p>
                        </div>
                        <div class="rounded-lg py-12 border border-blue-200 px-11 text-justify bg-[#FAF8FF]">
                            <h2 class="text-[#414141] font-bold text-2xl">4. What is useMemo?</h2>
                            <p class="text-[#414141] text-base mt-[10px]">useMemo is a hook in React that is used to memoize the result of a function or expression, preventing unnecessary computations and optimizing performance in components. It takes a function and an array of dependencies as arguments. The function contains the computation to be memoized, and the dependencies specify the values that the memoized result depends on. The memoized result is cached and only recomputed if any of the dependencies change. useMemo is commonly used in scenarios where the computation is expensive or repeated multiple times in a component, and it's typically used in conjunction with other hooks to optimize performance and prevent unnecessary re-renders.</p> 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;