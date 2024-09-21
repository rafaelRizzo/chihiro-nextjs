"use client"
import Image from "next/image";
import Link from "next/link";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { HiOutlinePlay } from "react-icons/hi2";

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import SocialComponent from "@/components/SocialComponent";

export default function Home() {
    return (
        <div className="max-w-3xl lg:max-w-5xl mx-auto px-10">
            <nav>
                <menu className="flex items-center justify-center lg:justify-between min-h-32 max-h-32">
                    <div>
                        <li>
                            <Image src={"logo.svg"} alt="Logo Studio Ghibli" width={180} height={100} />
                        </li>
                    </div>
                    <div className="hidden gap-4 lg:flex">
                        <li>
                            <SocialComponent
                                href="https://studioghibli.com.br/filmografia/a-viagem-de-chihiro/"
                                label="Abrir Filmografia">
                                Filmografia
                            </SocialComponent>
                        </li>
                        <li>
                            <SocialComponent
                                href="https://www.linkedin.com/in/rafael-rizzo-breschi-b02547216/"
                                label="Contrate meus serviços">
                                Contato
                            </SocialComponent>
                        </li>
                    </div>
                </menu>
            </nav>

            <div className="container-main flex items-center py-5">
                <main className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                    <div className="font-archivo flex flex-col order-2 lg:order-1">
                        <h2 className="font-semibold tracking-wide">HAYAO MIYAZAKI</h2>

                        <h1 className="font-andada text-4xl lg:text-6xl font-black tracking-wide">A VIAGEM</h1>
                        <h1 className="font-andada text-4xl lg:text-6xl font-black tracking-wide">DE CHIHIRO</h1>

                        <section className="my-5">
                            <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
                        </section>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <Link
                                className="flex items-center justify-center border border-rose-300 text-zinc-950 font-semibold text-sm gap-1 rounded-sm bg-rose-300 hover:bg-rose-400 hover:border-rose-400 py-2 min-h-10 max-h-10 transition-all"
                                href={"https://www.netflix.com/br/title/60023642"} target="_blank">
                                <HiOutlinePlay className="font-black text-2xl" />
                                ASSISTIR AGORA
                            </Link>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="flex items-center justify-center border border-rose-300 hover:border-rose-400 text-zinc-50 font-semibold text-sm gap-2 rounded-sm py-2 min-h-10 max-h-10 bg-transparent hover:bg-transparent transition-all">
                                        ASSISTA O TRAILER
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="bg-zinc-950 sm:max-w-3xl">
                                    <DialogHeader>
                                        <DialogTitle className="my-2">Descubra a Magia de A Viagem de Chihiro</DialogTitle>
                                        <DialogDescription>
                                            <p>Se você ainda não assistiu, está perdendo uma das experiências cinematográficas mais encantadoras e inesquecíveis de todos os tempos! 🎬✨</p>

                                            <p>Este filme, dirigido pelo mestre Hayao Miyazaki e ganhador do Oscar, não é apenas uma animação; é uma viagem fascinante para um mundo de fantasia deslumbrante e emocionalmente profundo. 🍃</p>
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <iframe className="w-full min-h-[400px]" src="https://www.youtube.com/embed/ByXuk9QqQkk" title="Spirited Away - Official Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                    </div>
                                </DialogContent>
                            </Dialog>

                        </div>
                    </div>

                    <div className="flex items-center justify-center order-1">
                        <Image
                            className="lg:-translate-y-8 w-3/3 lg:w-full lg:full h-auto animate-pulse"
                            src={"image.svg"}
                            alt="Ilustração 2 fantasmas"
                            width={574}
                            height={423}
                        />
                    </div>
                </main>
            </div >

        </div >
    );
}
