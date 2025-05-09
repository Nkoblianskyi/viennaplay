import type { Metadata } from "next"
import { Button } from "../../components/ui/button"

export const metadata: Metadata = {
  title: "Button Demo | ViennaPlay",
  description: "Демонстрация всех вариантов кнопок, доступных в ViennaPlay.",
}

export default function ButtonDemoPage() {
  return (
    <>
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Button Demo</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Демонстрация всех вариантов кнопок, доступных в ViennaPlay
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            {/* Основные варианты */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Основные варианты</h2>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            {/* Новые цветные варианты */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Новые цветные варианты</h2>
              <div className="flex flex-wrap gap-4">
                <Button variant="success">Success</Button>
                <Button variant="info">Info</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="light">Light</Button>
              </div>
            </div>

            {/* Outline варианты */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Outline варианты</h2>
              <div className="flex flex-wrap gap-4">
                <Button variant="outlinePrimary">Outline Primary</Button>
                <Button variant="outlineSuccess">Outline Success</Button>
                <Button variant="outlineInfo">Outline Info</Button>
                <Button variant="outlineWarning">Outline Warning</Button>
                <Button variant="outlineDark">Outline Dark</Button>
                <Button variant="outlineLight">Outline Light</Button>
              </div>
            </div>

            {/* Outline White на темном фоне */}
            <div className="bg-secondary p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Outline White (на темном фоне)</h2>
              <div className="flex flex-wrap gap-4">
                <Button variant="outlineWhite">Outline White</Button>
              </div>
            </div>

            {/* Размеры */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Размеры</h2>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="default">
                  Default
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
                <Button variant="primary" size="xl">
                  Extra Large
                </Button>
                <Button variant="primary" size="icon">
                  <span className="text-lg">+</span>
                </Button>
              </div>
            </div>

            {/* Примеры использования */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Примеры использования</h2>

              <div className="space-y-8">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Форма</h3>
                  <div className="flex gap-4">
                    <Button variant="primary">Сохранить</Button>
                    <Button variant="outlineDark">Отмена</Button>
                  </div>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Уведомления</h3>
                  <div className="flex gap-4">
                    <Button variant="success">Подтвердить</Button>
                    <Button variant="warning">Предупреждение</Button>
                    <Button variant="destructive">Удалить</Button>
                    <Button variant="info">Информация</Button>
                  </div>
                </div>

                <div className="p-6 border rounded-lg bg-dark text-white">
                  <h3 className="text-xl font-semibold mb-4">На темном фоне</h3>
                  <div className="flex gap-4">
                    <Button variant="primary">Основная</Button>
                    <Button variant="light">Светлая</Button>
                    <Button variant="outlineWhite">Контурная</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
