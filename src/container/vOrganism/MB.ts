import Controller from '../vMolecule/store/controller'
import Image from '../vMolecule/vAtom/store/image'

const state = {
title: 'Mandelbrot Set'
}



export default {
  state,
  modules: {
    Controller,
    Image
  }
}
