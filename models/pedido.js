const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  docente: {
    nombre: String,
    apellido: String,
    dni: Number,
    matricula: Number,
  },
  descripcion: {
    required: true,
    type: String,
  },
  fecha_solicitud: {
    required: true,
    type: Date,
  },
  fecha_utilizacion: {
    required: true,
    type: Date,
  },
  numero_laboratorio: {
    required: true,
    type: Number,
  },
  tipo_pedido: {
    required: true,
    type: String,
  },
  cantidad_grupos: {
    required: true,
    type: Number,
  },
  observaciones: {
    type: String,
  },
  materia: {
    required: true,
    type: String,
  },
  numero_tp: {
    required: true,
    type: Number,
  },
  lista_equipos: [
    {
      cantidad: {
        required: true,
        type: Number,
      },
      equipo: { type: mongoose.Schema.Types.ObjectId, ref: "Equipo" },
    },
  ],
  lista_reactivos: [
    {
      idReactivo: {  //esta en DER pero no en Figma
        required: true,
        type: Number,
      },
      descripcion: {
        required: true,
        type: String,
      },
      cas: {
        required: true,
        type: String,
      },
      calidad: {
        required: true,
        type: String,
      }, 
      concentracion_tipo: {
        required: true,
        type: String,
      }, 
      concentracion_medida: {
        required: true,
        type: Number,
      }, 
      disolvente: {
        required: true,
        type: String,
      },
      cantidad: {
        required: true,
        type: Number,
      },
      equipo: { type: mongoose.Schema.Types.ObjectId, ref: "Equipo" },
    },
  ],
  lista_materiales: [ {
  
    descripcion: {
      required: true,
      type: String,
    },
    cantidd: {
      required: true,
      type: Number, 
    },
    unidadDeMedida: {
      required: true,
      type: Number,
    },
    clase: {
      required: true,
      type: String,
    },
    stock: {
      required: true,
      type: Number, 
    },
    equipo: { type: mongoose.Schema.Types.ObjectId, ref: "Equipo" },
  },],
});

module.exports = mongoose.model("Pedido", dataSchema);
