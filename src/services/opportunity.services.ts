import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TOpportunity, TOpportunityCreate, TOpportunityUpdate } from "../schemas/opportunity.schemas";

@injectable()
export class OpportunityServices {
    async create(body: TOpportunityCreate, userId: number): Promise<TOpportunity> {
        const newOpportunity = { ...body, userId}
        const response = await prisma.opportunity.create({ data: newOpportunity });
        return response;
    }
    async findMany(userId?: number): Promise<TOpportunity[]> {
        const response = await prisma.opportunity.findMany({ where: { userId } });
        return response;
    }
    findOne(opportunity: TOpportunity): TOpportunity {
        return opportunity
    }
    async update(id: number, body: TOpportunityUpdate): Promise<TOpportunity> {
        const response = await prisma.opportunity.update({ where: { id }, data: body });
        return response;
    }
    async delete(id: number): Promise<void> {
        await prisma.opportunity.delete({ where: { id } })
    }
}