import { Injectable, CanActivate, ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor( private readonly reflector: Reflector ) { }

    canActivate( context: ExecutionContext ): boolean {
        const roles = this.reflector.get<string[]>( 'roles', context.getHandler() );

        if ( !roles || !roles.includes( 'admin' ) ) {
            return false;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return user && user.role === 'admin';
    }
}
export const Admin = () => SetMetadata( 'roles', [ 'admin' ] );