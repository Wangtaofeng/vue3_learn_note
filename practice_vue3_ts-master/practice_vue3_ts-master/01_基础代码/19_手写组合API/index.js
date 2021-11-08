// shallowReactive (浅劫持，浅响应) 和 reactive（深劫持，深响应）


const reactiveHandler = {
    // 获取某个属性
    get(target,prop) {
        if(prop === '_is_reactive') return true;
        const result = Reflect.get(target,prop)
        console.log('拦截了获取数据',prop,result)
        return result
    },
    // 修改某个属性
    set(target,prop,value) {
        const result = Reflect.set(target,prop,value)
        console.log('拦截了修改数据或添加数据',prop,value)
        return result
    },
    // 删除某个属性
    deleteProperty(target,prop) {
        const result = Reflect.deleteProperty(target,prop)
        console.log('拦截了删除数据',prop)
        return result
    }
}

// 定义一个shalloReactive函数，传入一个目标对象
function shallowReactive(target) {
    // 判断传入的target是否为一个对象
    if(target && typeof target === 'object') {
        console.log('对象')
        return new Proxy(target,reactiveHandler)
    }

    // 不是对象直接返回
    return target
}


// 定义一个Reactive函数，传入一个目标对象
function reactive(target) {
    // 判断传入的target是否为一个对象
    if(target && typeof target === 'object') {
        if(Array.isArray(target)) {
            target.forEach((item,index)=> {
                target[index] = reactive(item)
            })
        } else {
            // 当前数据是对象
            Object.keys(target).forEach(key=>{
                target[key] = reactive(target[key])
            })
        }
        return new Proxy(target,reactiveHandler)
    }
    // 不是对象直接返回
    return target
}
// =================================
const readonlyHandler ={
    // 获取某个属性
    get(target,prop) {
        console.log(prop)
        if(prop === '_is_readonly') return true;
        const result = Reflect.get(target,prop)
        console.log('拦截了获取数据',prop,result)
        return result
    },
    // 修改某个属性
    set(target,prop,value) {
        console.log('只能读取数据，不能修改或添加',prop,value)
        return true
    },
    // 删除某个属性
    deleteProperty(target,prop) {
        console.log('只能读取数据，不能删除')
        return true
    }
}
// 定义一个shallowReadonly函数，传入一个目标对象
function shallowReadonly(target) {
    // 判断传入的target是否为一个对象
    if(target && typeof target === 'object') {

        return new Proxy(target,readonlyHandler)
    }
    // 不是对象直接返回
    return target
}
// 定义一个readonly 函数
function readonly(target) {
    // 判断传入的target是否为一个对象
    if(target && typeof target === 'object') {
        if(Array.isArray(target)) {
            target.forEach((item,index)=> {
                target[index] = readonly(item)
            })
        } else {
            // 当前数据是对象
            Object.keys(target).forEach(key=>{
                target[key] = readonly(target[key])
            })
        }
        return new Proxy(target,readonlyHandler)
    }
    // 不是对象直接返回
    return target
}

// 定义一个shallowRef函数
function shallowRef(target) {
    return {
        _value:target,
        get() {
            console.log('劫持到了读取数据')
            return this._value
        },
        set(val) {
            console.log('劫持到了修改数据')
            this._value = val
        }
    }
}
// 定义一个ref函数
function ref(target) {
    target = reactive(target)
    return {
        _is_ref:true, // 标识当前对象是ref对象
        _value:target,
        get() {
            console.log('劫持到了读取数据')
            return this._value
        },
        set(val) {
            val = reactive(val)
            console.log('劫持到了修改数据')
            this._value = val
        }
    }
}
// 定义一个函数isRef，判断当前对象是不是ref对象
function isRef(obj) {
    return obj && obj._is_ref
}
// 定义一个函数isReactive，判断当前对象是不是Reactive对象
function isReactive(obj) {
    return obj && obj._is_reactive
}
// 定义一个函数isReadonly，判断当前对象是不是readonly对象
function isReadonly(obj) {
    return obj && obj._is_readonly
}
// 定义一个函数isProxy，判断当前对象是不是proxy对象
function isProxy(obj) {
    return isReactive(obj) || isReadonly(obj)
}




