<?php

namespace SoMany\NovaLogify\Enums;

enum Rotation: string
{
    case DAILY = 'daily';
    case WEEKLY = 'weekly';
    case MONTHLY = 'monthly';
    case YEARLY = 'yearly';
}
