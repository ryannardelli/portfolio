export const WorkBenefit = () => {
    return (
        <section className="text-assets font-roboto">
            <div className="flex justify-center mt-10 text-4xl font-normal font-sen">
                Por que me escolher?
            </div>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap text-center justify-center">
                    
                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <img 
                                    src="/img/image-designer-responsive.png" 
                                    className="w-48 mb-3" 
                                    alt="Responsivo" 
                                />
                            </div>
                            <h2 className="title-font font-normal text-2xl text-assets">
                                Designer Responsivo
                            </h2>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <img 
                                    src="https://cdn-icons-png.flaticon.com/512/552/552408.png" 
                                    className="w-32 mb-3" 
                                    alt="Comunicacao" 
                                />
                            </div>
                            <h2 className="title-font font-normal text-2xl text-assets">
                                Criatividade e Inovação
                            </h2>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <img 
                                    src="https://keeps.com.br/wp-content/uploads/2022/09/comunicacao-assertiva2.png" 
                                    className="w-48 mb-3" 
                                    alt="Criatividade" 
                                />
                            </div>
                            <h2 className="title-font font-normal text-2xl text-assets">
                                Comunicação Eficiente
                            </h2>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <img 
                                    src="https://blog.symtrax.com/wp-content/uploads/2022/05/API-cloud.png" 
                                    className="w-48 mb-3" 
                                    alt="API" 
                                />
                            </div>
                            <h2 className="title-font font-normal text-2xl text-assets">
                                Perito em APIs
                            </h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}