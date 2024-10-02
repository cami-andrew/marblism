/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.TrainingPlanInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trainingPlan.createMany(input as any))),

        create: procedure.input($Schema.TrainingPlanInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trainingPlan.create(input as any))),

        deleteMany: procedure.input($Schema.TrainingPlanInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trainingPlan.deleteMany(input as any))),

        delete: procedure.input($Schema.TrainingPlanInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trainingPlan.delete(input as any))),

        findFirst: procedure.input($Schema.TrainingPlanInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).trainingPlan.findFirst(input as any))),

        findMany: procedure.input($Schema.TrainingPlanInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).trainingPlan.findMany(input as any))),

        findUnique: procedure.input($Schema.TrainingPlanInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).trainingPlan.findUnique(input as any))),

        updateMany: procedure.input($Schema.TrainingPlanInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trainingPlan.updateMany(input as any))),

        update: procedure.input($Schema.TrainingPlanInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trainingPlan.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TrainingPlanCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrainingPlanCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrainingPlanCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrainingPlanCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TrainingPlanCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrainingPlanCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TrainingPlanGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TrainingPlanGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrainingPlanCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrainingPlanCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TrainingPlanGetPayload<T>, Context>) => Promise<Prisma.TrainingPlanGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TrainingPlanDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrainingPlanDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrainingPlanDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrainingPlanDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TrainingPlanDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrainingPlanDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TrainingPlanGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TrainingPlanGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrainingPlanDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrainingPlanDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TrainingPlanGetPayload<T>, Context>) => Promise<Prisma.TrainingPlanGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TrainingPlanFindFirstArgs, TData = Prisma.TrainingPlanGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TrainingPlanFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TrainingPlanGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TrainingPlanFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TrainingPlanFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TrainingPlanGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TrainingPlanGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TrainingPlanFindManyArgs, TData = Array<Prisma.TrainingPlanGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TrainingPlanFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TrainingPlanGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TrainingPlanFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TrainingPlanFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TrainingPlanGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TrainingPlanGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TrainingPlanFindUniqueArgs, TData = Prisma.TrainingPlanGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TrainingPlanFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TrainingPlanGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TrainingPlanFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TrainingPlanFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TrainingPlanGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TrainingPlanGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TrainingPlanUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrainingPlanUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrainingPlanUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrainingPlanUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TrainingPlanUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrainingPlanUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TrainingPlanGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TrainingPlanGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrainingPlanUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrainingPlanUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TrainingPlanGetPayload<T>, Context>) => Promise<Prisma.TrainingPlanGetPayload<T>>
            };

    };
}
