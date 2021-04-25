class ObjectUtil {
    public static deepCopy(obj: Object) {
        return JSON.parse(JSON.stringify(obj));
    }
}

export default ObjectUtil;