import { useCallback, useEffect, useRef, useState } from 'react'

export const useHttpRequest = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    const activeHttpRequest = useRef<Array<any>>([])

    const sendRequest = useCallback(async(url: string, method: string = 'GET', body: any = null, headers: HeadersInit = {}): Promise<any> => {
        setLoading(true)

        const httpAbortCtrl = new AbortController()
        activeHttpRequest.current.push(httpAbortCtrl)

        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCtrl.signal
            })
            const data = await response.json()
            activeHttpRequest.current = activeHttpRequest.current.filter(reqCtrl => reqCtrl !== httpAbortCtrl)
            if(!response.ok) {
                throw new Error(data.message)
            }
            setLoading(false)
            return data
        } catch (error: any) {
            setLoading(false)
            setError(error.message)
        }
    },[])

    const clearError = () => setError(null)

    useEffect(() => {
        return () => activeHttpRequest.current.forEach(abortCtrl => abortCtrl.abort())
    },[])

    return {clearError, error, loading, sendRequest}
}