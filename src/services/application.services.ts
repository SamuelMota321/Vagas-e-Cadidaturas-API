import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TApplication, TApplicationCreate } from "../schemas/application.schemas";

@injectable()
export class ApplicationServices {
    async create(opportunityId: number, body: TApplicationCreate): Promise<TApplication> {
        const response = await prisma.application.create({ data: { opportunityId, ...body } })
        return response;
    }
    async findMany(opportunityId: number): Promise<TApplication[]> {
        const response = await prisma.application.findMany({ where: { opportunityId } })
        return response;

    }
}