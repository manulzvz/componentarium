# Guardar ruta raíz de componentarium
ROOT_DIR=$(pwd)

# Nombre del componente a desplegar
COMPONENT=$1

if [ -z "$COMPONENT" ]; then
  echo "Uso: ./deploy-component.sh <nombre-del-componente>"
  exit 1
fi

SRC_DIR="$ROOT_DIR/$COMPONENT"
DEST_DIR="$ROOT_DIR/docs/$COMPONENT"  # ahora siempre apunta a la raíz

if [ ! -d "$SRC_DIR" ]; then
  echo "El componente $COMPONENT no existe."
  exit 1
fi

echo "🚀 Desplegando $COMPONENT..."

# Ir al directorio del componente
cd "$SRC_DIR"

# Limpiar build anterior
rm -rf dist .vite

# Instalar dependencias si es necesario
npm install

# Build para producción
npm run build

# Crear carpeta destino si no existe
mkdir -p "$DEST_DIR"

# Limpiar carpeta destino
rm -rf "$DEST_DIR"/*

# Copiar contenido de dist a docs/<componente>
cp -r dist/* "$DEST_DIR"

cd "$ROOT_DIR"

echo "✅ $COMPONENT listo para GitHub Pages."
