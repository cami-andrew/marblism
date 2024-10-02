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

        createMany: procedure.input($Schema.PetInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pet.createMany(input as any))),

        create: procedure.input($Schema.PetInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pet.create(input as any))),

        deleteMany: procedure.input($Schema.PetInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pet.deleteMany(input as any))),

        delete: procedure.input($Schema.PetInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pet.delete(input as any))),

        findFirst: procedure.input($Schema.PetInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).pet.findFirst(input as any))),

        findMany: procedure.input($Schema.PetInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).pet.findMany(input as any))),

        findUnique: procedure.input($Schema.PetInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).pet.findUnique(input as any))),

        updateMany: procedure.input($Schema.PetInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pet.updateMany(input as any))),

        update: procedure.input($Schema.PetInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pet.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PetCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PetCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PetCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PetCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PetCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PetCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PetCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PetCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PetGetPayload<T>, Context>) => Promise<Prisma.PetGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PetDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PetDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PetDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PetDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PetDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PetDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PetDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PetDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PetGetPayload<T>, Context>) => Promise<Prisma.PetGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PetFindFirstArgs, TData = Prisma.PetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PetFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PetFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PetFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PetFindManyArgs, TData = Array<Prisma.PetGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PetFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PetGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PetFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PetFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PetGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PetGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PetFindUniqueArgs, TData = Prisma.PetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PetFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PetFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PetFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PetUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PetUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PetUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PetUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PetUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PetUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PetUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PetUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PetGetPayload<T>, Context>) => Promise<Prisma.PetGetPayload<T>>
            };

    };
}
