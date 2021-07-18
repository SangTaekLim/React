import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
    // 대기/완료 / 실패 상태 관리

    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
    }, deps)
    return [loading, resolved, error];

}