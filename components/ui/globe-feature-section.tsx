"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function Featured_05() {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto overflow-hidden rounded-[40px] bg-white border border-[#F3F4F6] shadow-[0_10px_40px_rgba(0,0,0,0.04)] px-8 py-20 md:px-20 md:py-28 mt-48 group">
      {/* Background soft glow behind globe */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-50/50 to-transparent blur-[100px] pointer-events-none" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        <div className="max-w-xl text-left">
          <h1 className="text-[32px] md:text-[44px] font-bold text-[#111827] leading-[1.2] mb-6">
            Build with <span className="text-[#8B5CF6]">Ruixen UI</span>{" "}
            <span className="text-[#6B7280] font-medium block mt-2 text-[20px] md:text-[24px] leading-[1.4]">
              Empower your team with fast, elegant, and scalable UI components. Ruixen UI brings simplicity and performance to your modern apps.
            </span>
          </h1>
          <Button className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#111827] px-8 py-6 text-[15px] font-bold text-white transition-all hover:scale-[0.98] hover:bg-[#374151] shadow-xl shadow-black/10">
            Join Today <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Globe Container - Large and partial as in reference image */}
        <div className="relative h-[400px] md:h-[500px] w-full md:w-1/2 flex items-center justify-end">
          <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
            <Globe className="w-full h-full opacity-100" />
          </div>
          {/* Soft inner shadow/lighting overlay for the 'clay' look */}
          <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-radial-gradient from-transparent via-transparent to-white/30 pointer-events-none z-20" />
        </div>
      </div>
    </section>
  );
}

const GLOBE_CONFIG: COBEOptions = {
  width: 1200,
  height: 1200,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1], // Pure white base for the 'clay' look
  markerColor: [251 / 255, 100 / 255, 21 / 255], // Bright orange
  glowColor: [1.1, 1.1, 1.1], // Slight glow for edge definition
  markers: [
    { location: [14.5995, 120.9842], size: 0.05 },
    { location: [19.076, 72.8777], size: 0.12 },
    { location: [23.8103, 90.4125], size: 0.08 },
    { location: [30.0444, 31.2357], size: 0.1 },
    { location: [39.9042, 116.4074], size: 0.12 },
    { location: [-23.5505, -46.6333], size: 0.15 },
    { location: [19.4326, -99.1332], size: 0.12 },
    { location: [40.7128, -74.006], size: 0.15 },
    { location: [34.6937, 135.5022], size: 0.08 },
    { location: [41.0082, 28.9784], size: 0.1 },
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.003 // Slower, more elegant rotation
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    } as any)

    setTimeout(() => (canvasRef.current!.style.opacity = "1"))
    return () => globe.destroy()
  }, [])

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[1/1] w-full",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-1000 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
