export default class StructView extends DataView {
    constructor(...args) {
        let argus;
        if (args[0] instanceof DataView) { // Copy constructor
            argus = [args[0].buffer, args[0].byteOffset, args[0].byteLength];
        } else {
            argus = args;
        }
        super(...argus);
        // Current position in the view;
        this._position = 0;
    }

    get position() {
        return this._position;
    }
    set position(position) {
        this._position = position;
    }

    get endian() {
        return this._le;
    }
    set endian(endian) {
        this._le = endian;
    }

    setInt8(v) {
        super.setInt8(this._position, v);
        this._position++;
    }
    setUint8(v) {
        super.setUint8(this._position, v);
        this._position++;
    }
    setInt16(v, le = this._le) {
        super.setInt16(this._position, v, le);
        this._position += 2;
    }
    setUint16(v, le = this._le) {
        super.setUint16(this._position, v, le);
        this._position += 2;
    }
    setInt32(v, le = this._le) {
        super.setInt32(this._position, v, le);
        this._position += 4;
    }
    setUint32(v, le = this._le) {
        super.setUint32(this._position, v, le);
        this._position += 4;
    }
    setFloat32(v, le = this._le) {
        super.setFloat32(this._position, v, le);
        this._position += 4;
    }
    setFloat64(v, le = this._le) {
        super.setFloat64(this._position, v, le);
        this._position += 4;
    }

    getInt8() {
        let v = super.getInt8(this._position);
        this._position++;
        return v;
    }
    getUint8() {
        let v = super.getUint8(this._position);
        this._position++;
        return v;
    }
    getInt16(le = this._le) {
        let v = super.getInt16(this._position, le);
        this._position += 2;
        return v;
    }
    getUint16(le = this._le) {
        let v = super.getUint16(this._position, le);
        this._position += 2;
        return v;
    }
    getInt32(le = this._le) {
        let v = super.getInt32(this._position, le);
        this._position += 4;
        return v;
    }
    getUint32(le = this._le) {
        let v = super.getUint32(this._position, le);
        this._position += 4;
        return v;
    }
    getFloat32(le = this._le) {
        let v = super.getFloat32(this._position, le);
        this._position += 4;
        return v;
    }
    getFloat64(le = this._le) {
        let v = super.getFloat64(this._position, le);
        this._position += 4;
        return v;
    }

    setInt8Array(v) {
        for (let i = 0, ie = v.length; i < ie; i++) {
            this.setInt8(v[i]);
        }
    }
    setUint8Array(v) {
        for (let i = 0, ie = v.length; i < ie; i++) {
            this.setUint8(v[i]);
        }
    }
    setInt16Array(v, le = this._le) {
        for (let i = 0, ie = v.length; i < ie; i++) {
            this.setInt16(v[i], le);
        }
    }
    setUint16Array(v, le = this._le) {
        for (let i = 0, ie = v.length; i < ie; i++) {
            this.setUint16(v[i], le);
        }
    }
    setInt32Array(v, le = this._le) {
        for (let i = 0, ie = v.length; i < ie; i++) {
            this.setInt32(v[i], le);
        }
    }
    setUint32Array(v, le = this._le) {
        for (let i = 0, ie = v.length; i < ie; i++) {
            this.setUint32(v[i], le);
        }
    }
    setFloat32Array(v, le = this._le) {
        for (let i = 0, ie = v.length; i < ie; i++) {
            this.setFloat32(v[i], le);
        }
    }
    setFloat64Array(v, le = this._le) {
        for (let i = 0, ie = v.length; i < ie; i++) {
            this.setFloat64(v[i], le);
        }
    }

    getInt8Array(numElem) {
        const array = new Int8Array(numElem);
        for (let i = 0, ie = numElem; i < ie; i++) {
            array[i] = this.getInt8();
        }
        return array;
    }
    getUint8Array(numElem) {
        const array = new Uint8Array(numElem);
        for (let i = 0, ie = numElem; i < ie; i++) {
            array[i] = this.getUint8();
        }
        return array;
    }
    getInt16Array(numElem, le = this._le) {
        const array = new Int16Array(numElem);
        for (let i = 0, ie = numElem; i < ie; i++) {
            array[i] = this.getInt16(le);
        }
        return array;
    }
    getUint16Array(numElem, le = this._le) {
        const array = new Uint16Array(numElem);
        for (let i = 0, ie = numElem; i < ie; i++) {
            array[i] = this.getUint16(le);
        }
        return array;
    }
    getInt32Array(numElem, le = this._le) {
        const array = new Int32Array(numElem);
        for (let i = 0, ie = numElem; i < ie; i++) {
            array[i] = this.getInt32(le);
        }
        return array;
    }
    getUint32Array(numElem, le = this._le) {
        const array = new Uint32Array(numElem);
        for (let i = 0, ie = numElem; i < ie; i++) {
            array[i] = this.getUint32(le);
        }
        return array;
    }
    getFloat32Array(numElem, le = this._le) {
        const array = new Float32Array(numElem);
        for (let i = 0, ie = numElem; i < ie; i++) {
            array[i] = this.getFloat32(le);
        }
        return array;
    }
    getFloat64Array(numElem, le = this._le) {
        const array = new Float64Array(numElem);
        for (let i = 0, ie = numElem; i < ie; i++) {
            array[i] = this.getFloat64(le);
        }
        return array;
    }
}
