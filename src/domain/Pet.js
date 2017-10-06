class Pet{
    constructor(tipe , harga){
        this.tipe = tipe
        this.harga= harga
    }

    setTipe(tipe){
        this.tipe = tipe
    }
    setHarga(harga){
        this.harga =harga
    }

    getTipe(){
        return this.tipe
    }
    getHarga(){
        return this.harga
    }

}

export {Pet}