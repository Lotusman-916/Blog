declare module 'typed.js' {
  interface TypedOptions {
    // 这里添加 typed.js 支持的选项
    strings: string[]
    typeSpeed?: number
    backSpeed?: number
    backDelay?: number
    loop?: boolean
  }

  class Typed {
    constructor(element: Element, options: TypedOptions)
  }

  export default Typed
}
