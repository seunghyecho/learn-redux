import {createContext, useContext} from "react";

const PreloadContext = createContext(null);

const Preloader = ({resolve}) => {
    const preloadContext = useContext(PreloadContext);
    if (!preloadContext) return null;
    if (preloadContext.done) return null;

    preloadContext.promises.push(Promise.resolve(resolve()));
    return null;
}

const usePreloader = resolve => {
    const preloadContext = useContext(PreloadContext);
    if (!preloadContext) return null;
    if (preloadContext.done) return null;
    preloadContext.promises.push(Promise.resolve(resolve()))
}
export {Preloader, usePreloader};
