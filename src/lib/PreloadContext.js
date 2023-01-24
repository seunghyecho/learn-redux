import {createContext, useContext} from "react";

const PreloadContext = createContext(null);
// PreloadContext 결론
// 비동기 작업 요청의 결과인 promise 들을 한꺼번에 확인하기 위한 객체.
// 모을 때 컴포넌트 깊이에 구애받지 않기 위해 ContextAPI의 Provider를 사용

// 참고
// https://velog.io/@baramofme/%EB%A6%AC%EC%95%A1%ED%8A%B8-SSR-%EC%97%90%EC%84%9C-PreloadContext-%EB%AD%98%EA%B9%8C

const Preloader = ({resolve}) => {
    const preloadContext = useContext(PreloadContext);
    // 클라이언트에서 실행을 막도록 하는 코드
    if (!preloadContext) return null;
    if (preloadContext.done) return null;

    // 사전적재 컨텍스트가 미완료라면
    // 주어진 resolve() 반환값으로 then 문을 실행할 수 있는 Promise 객체를 생성해 PreloadContext.promises에 쌓기
    preloadContext.promises.push(Promise.resolve(resolve()));
    return null;
}

const usePreloader = resolve => {
    const preloadContext = useContext(PreloadContext);
    if (!preloadContext) return null;
    if (preloadContext.done) return null;
    preloadContext.promises.push(Promise.resolve(resolve()))
}
export {PreloadContext, Preloader, usePreloader};
