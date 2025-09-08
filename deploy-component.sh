# ==========================================================
# Script para desplegar componentes de Componentarium
# Hace build, copia a docs/<componente> y commit+push automático
# ==========================================================

# Guardar ruta raíz de componentarium
ROOT_DIR=$(pwd)

# Nombre del componente a desplegar
COMPONENT=$1

# Mensaje de commit (opcional)
COMMIT_MSG=$2
if [ -z "$COMMIT_MSG" ]; then
  COMMIT_MSG="feat: Deploy $COMPONENT to GitHub Pages"
fi

if [ -z "$COMPONENT" ]; then
  echo "Uso: ./deploy-component.sh <nombre-del-componente> [mensaje de commit]"
  exit 1
fi

SRC_DIR="$ROOT_DIR/$COMPONENT"
DEST_DIR="$ROOT_DIR/docs/$COMPONENT"

if [ ! -d "$SRC_DIR" ]; then
  echo "❌ El componente $COMPONENT no existe."
  exit 1
fi

echo "🚀 Desplegando $COMPONENT..."

# Entrar al directorio del componente
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

# Agregar cambios a git
git add "docs/$COMPONENT"

# Commit y push automático
git commit -m "$COMMIT_MSG"
git push origin main

echo "✅ $COMPONENT desplegado correctamente en GitHub Pages!"
echo "URL probable: https://<tu-usuario>.github.io/componentarium/$COMPONENT/"
